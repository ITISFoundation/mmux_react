install:
	npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
	python3.10 -m venv api/venv
	api/venv/bin/python -m pip install -r api/requirements.txt

start-api: 
	cd api && venv/bin/flask run --no-debugger && cd ..

start: start api
	npm start