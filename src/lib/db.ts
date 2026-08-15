import { Pool } from "pg";

const SCHEMA = `
CREATE TABLE IF NOT EXISTS waitinglist_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  current_step TEXT NOT NULL DEFAULT 'email',
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  name TEXT,
  dob DATE,
  completed_at TIMESTAMPTZ
);
`;

let pool: Pool | null = null;
let schemaReady = false;

export function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

export async function ensureSchema() {
  if (schemaReady) return;
  await getPool().query(SCHEMA);
  schemaReady = true;
}

export type WaitlistUser = {
  id: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  current_step: string;
  answers: Record<string, unknown>;
  name: string | null;
  dob: string | null;
  completed_at: Date | null;
};

export async function upsertWaitlistEmail(email: string): Promise<WaitlistUser> {
  await ensureSchema();
  const result = await getPool().query<WaitlistUser>(
    `INSERT INTO waitinglist_users (email)
     VALUES ($1)
     ON CONFLICT (email) DO UPDATE SET updated_at = NOW()
     RETURNING id, email, created_at, updated_at, current_step, answers, name, dob::text, completed_at`,
    [email],
  );
  return result.rows[0];
}

export async function updateWaitlistUser(
  id: string,
  data: {
    current_step?: string;
    answers?: Record<string, unknown>;
    name?: string | null;
    dob?: string | null;
    completed?: boolean;
  },
): Promise<WaitlistUser | null> {
  await ensureSchema();
  const result = await getPool().query<WaitlistUser>(
    `UPDATE waitinglist_users
     SET
       current_step = COALESCE($2, current_step),
       answers = CASE WHEN $3::jsonb IS NULL THEN answers ELSE answers || $3::jsonb END,
       name = COALESCE($4, name),
       dob = COALESCE($5::date, dob),
       completed_at = CASE WHEN $6 THEN NOW() ELSE completed_at END,
       updated_at = NOW()
     WHERE id = $1
     RETURNING id, email, created_at, updated_at, current_step, answers, name, dob::text, completed_at`,
    [
      id,
      data.current_step ?? null,
      data.answers ? JSON.stringify(data.answers) : null,
      data.name ?? null,
      data.dob ?? null,
      data.completed === true,
    ],
  );
  return result.rows[0] ?? null;
}

export async function listWaitlistUsers(): Promise<WaitlistUser[]> {
  await ensureSchema();
  const result = await getPool().query<WaitlistUser>(
    `SELECT id, email, created_at, updated_at, current_step, answers, name, dob::text, completed_at
     FROM waitinglist_users
     ORDER BY created_at DESC`,
  );
  return result.rows;
}
