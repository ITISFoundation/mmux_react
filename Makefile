FLASKAPI_DIR := ./flaskapi
VENV_DIR := $(FLASKAPI_DIR)/.venv
MMUX_PYTHON_DIR := $(FLASKAPI_DIR)/mmux_python
MMUX_PYTHON_BRANCH := "work/jgo/flask_mmux_nih"

base-install:
	sudo apt-get npm
	## install nvm (node version manager)
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
	wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
	nvm install 22 ## gets node v22 (latest)

install:
	npm install react react-start react-scripts web-vitals superagent
	npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

install-mmux-python:
	git clone https://github.com/ITISFoundation/mmux_python $(MMUX_PYTHON_DIR)
	cd $(MMUX_PYTHON_DIR) && git checkout $(MMUX_PYTHON_BRANCH)
	python3.10 -m venv $(VENV_DIR)
	$(VENV_DIR)/bin/python -m pip install flask python-dotenv
	$(VENV_DIR)/bin/python -m pip install -r $(MMUX_PYTHON_DIR)/requirements.txt

start-backend: 
	cd $(FLASKAPI_DIR) && .venv/bin/flask run --no-debugger

start-frontend:
	npm start

js-client: ## requires serving from FunctionsAPI already active
	curl http://localhost:8000/generate-openapi -o openapi.json
	npm install @openapitools/openapi-generator-cli -g
	openapi-generator-cli generate \
		-i openapi.json \
		-g javascript \
		-o ./src/functions-api-js-client