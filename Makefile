.PHONY: help install db-up db-down dev build start prod lint clean

SHELL := /bin/bash
PORT ?= 3015
NVM_DIR ?= $(HOME)/.nvm

# Make does not load nvm/fnm. Source them in recipes, or pass NPM=/path/to/npm.
define WITH_NODE
set -euo pipefail; \
if [ -n "$(NPM)" ]; then export PATH="$$(dirname "$(NPM)"):$$PATH"; fi; \
if [ -s "$(NVM_DIR)/nvm.sh" ]; then . "$(NVM_DIR)/nvm.sh"; fi; \
if command -v fnm >/dev/null 2>&1; then eval "$$(fnm env 2>/dev/null)" || true; fi; \
if [ -x "$(HOME)/.volta/bin/npm" ]; then export PATH="$(HOME)/.volta/bin:$$PATH"; fi; \
if ! command -v npm >/dev/null 2>&1; then \
  echo "npm not found. Install Node.js 20+ or run: make prod NPM=/full/path/to/npm"; \
  exit 127; \
fi
endef

help:
	@echo "Wodoo landing page"
	@echo ""
	@echo "  make install   Install npm dependencies"
	@echo "  make db-up     Start Postgres (docker compose)"
	@echo "  make db-down   Stop Postgres"
	@echo "  make dev       Run Next.js in development"
	@echo "  make build     Create a production build"
	@echo "  make start     Serve the production build on port $(PORT)"
	@echo "  make prod      Build and start production on port $(PORT)"
	@echo "  make lint      Run ESLint"
	@echo "  make clean     Remove the .next build folder"

install:
	$(WITH_NODE); npm ci

db-up:
	docker compose up -d

db-down:
	docker compose down

dev:
	$(WITH_NODE); npm run dev

build:
	$(WITH_NODE); npm run build

start:
	$(WITH_NODE); npm start

prod: build start

lint:
	$(WITH_NODE); npm run lint

clean:
	rm -rf .next
