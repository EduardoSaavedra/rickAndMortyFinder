.DEFAULT_GOAL := help
setup: clean ## Setup project
	npm install

start: ## Run project
	npm run start

clean: ## Remove node_modules
	rm -rf node_modules

test: ## Remove node_modules
	npm run test

standard: ## Run linter with auto fix
	npm run lint
