##
## Project setup
## ---------------------------------------------------------------------------

init: build up vendor ## Build et monte les containers, installe les vendors, créé la base de données.

build: ## Build le container Docker
	docker build -t webapp-image .

up: ## Monte les containers Docker
	 docker run -p 127.0.0.1:3000:3000 --name webapp webapp-image

start: ## Run le container Docker
	docker start -ai webapp

stop: ## Stop le container Docker
	docker stop webapp

help: ## Affiche la liste des commandes
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

.DEFAULT_GOAL := help

.PHONY: help
