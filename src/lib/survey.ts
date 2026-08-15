export const WAITLIST_COUNT_LABEL = "2,402+";

export type SurveyStepId =
  | "products"
  | "confidence"
  | "surprise"
  | "surprise_story"
  | "learn"
  | "teach"
  | "teach_first"
  | "profile"
  | "done";

export const PRODUCT_OPTIONS = [
  { id: "food", label: "Food & drinks", emoji: "🥫" },
  { id: "skincare", label: "Skincare & cosmetics", emoji: "🧴" },
  { id: "household", label: "Household cleaning products", emoji: "🧼" },
  { id: "baby", label: "Baby & children's products", emoji: "👶" },
  { id: "supplements", label: "Supplements", emoji: "💊" },
  { id: "snacks", label: "Snacks & processed foods", emoji: "🥤" },
  { id: "everything", label: "Everything we buy", emoji: "🛒" },
  { id: "other", label: "Other", emoji: "✏️" },
];

export const CONFIDENCE_OPTIONS = [
  { id: 1, label: "I have no idea what most of it means" },
  { id: 2, label: "I understand a little" },
  { id: 3, label: "I understand the basics" },
  { id: 4, label: "I'm pretty confident" },
  { id: 5, label: "I know exactly what I'm looking for" },
];

export const CONFIDENCE_MESSAGE =
  "Most people aren't taught how to interpret ingredient lists. An ingredient being unfamiliar doesn't automatically mean it's harmful—and an ingredient sounding “natural” doesn't automatically make it better. The important part is understanding what it is, why it's used, and how it fits into the whole product.";

export const SURPRISE_OPTIONS = [
  { id: "many", label: "Yes, many times", emoji: "😬" },
  { id: "few", label: "A few times", emoji: "😕" },
  { id: "once", label: "Once or twice", emoji: "🤔" },
  { id: "unsure", label: "Not that I remember", emoji: "🙂" },
  { id: "never", label: "Never", emoji: "❌" },
];

export const LEARN_OPTIONS = [
  { id: "inside", label: "What's actually inside it?" },
  { id: "watch", label: "Which ingredients should I understand or watch out for?" },
  { id: "healthy", label: "How healthy/nutritious is it?" },
  { id: "alternative", label: "Is there a better alternative?" },
  { id: "family", label: "Is it suitable for my family?" },
  { id: "processed", label: "How processed is it?" },
  { id: "compare", label: "How does it compare with similar products?" },
  { id: "other", label: "Something else" },
];

export const TEACH_OPTIONS = [
  { id: "tips", label: "Yes — send me practical tips", emoji: "🔥" },
  { id: "ingredients", label: "Yes — I want to understand ingredients", emoji: "📚" },
  { id: "family", label: "Yes — especially for my family", emoji: "👨‍👩‍👧" },
  { id: "shop", label: "Yes — teach me how to shop smarter", emoji: "🛒" },
  { id: "maybe", label: "Maybe — show me what I'd learn first", emoji: "🤷" },
  { id: "no", label: "No — I just want the app", emoji: "❌" },
];

export const SURVEY_ORDER: SurveyStepId[] = [
  "products",
  "confidence",
  "surprise",
  "surprise_story",
  "learn",
  "teach",
  "teach_first",
  "profile",
  "done",
];
