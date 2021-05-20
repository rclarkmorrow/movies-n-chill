FROM python:3.8-slim-buster
WORKDIR /app
COPY . .
RUN pip3 install Flask
RUN pip3 install flask_sqlalchemy
RUN pip3 install sqlalchemy
CMD ["python3", "api.py"]


