DEFAULT: help

help: ## This help message (DEFAULT)
	@echo Available make targets:
	@echo -----------------------
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'
	@echo

compare: ## Run all 4 variations of the test to compare ESM vs CJS and MultiProvider vs Direct Provider
	@npm run -s esm-multi
	@npm run -s cjs-multi
	@npm run -s esm-no-multi
	@npm run -s cjs-no-multi