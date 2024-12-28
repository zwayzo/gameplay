#!/bin/sh


python manage.py makemigrations
python manage.py migrate

python load_achivements.py

python manage.py shell < startup.py
python manage.py runserver 0.0.0.0:8000