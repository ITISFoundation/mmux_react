FLASKAPI_DIR := ./flaskapi
VENV_DIR := $(FLASKAPI_DIR)/.venv
MMUX_PYTHON_DIR := $(FLASKAPI_DIR)/mmux_python
MMUX_PYTHON_BRANCH := "work/jgo/flask_mmux_nih"

install:
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

functions-api-client: ## requires serving from FunctionsAPI already active
	curl http://localhost:8000/generate-openapi
	npm install @openapitools/openapi-generator-cli -g
	openapi-generator-cli generate \
		-i openapi.json \
		-g javascript \
		-o ./functions-api-react-client