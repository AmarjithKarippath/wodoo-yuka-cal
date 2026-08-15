.PHONY: help install db-up db-down dev build start prod lint clean

PORT ?= 3015

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
	npm ci

db-up:
	docker compose up -d

db-down:
	docker compose down

dev:
	npm run dev

build:
	npm run build

start:
	npm start

prod: build start

lint:
	npm run lint

clean:
	rm -rf .next
