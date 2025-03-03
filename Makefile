install:
	npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

install-mmux-python:
	git clone https://github.com/ITISFoundation/mmux_python flaskapi/
	cd flaskapi && git checkout work/jgo/flask_mmux_nih && cd ..
	python3.10 -m venv flaskapi/.venv
	flaskapi/.venv/bin/python -m pip install -r flask python-dotenv
	flaskapi/.venv/bin/python -m pip install -r flaskapi/mmux_python/requirements.txt

start-backend: 
	cd api && venv/bin/flask run --no-debugger && cd ..

start-frontend:
	npm start