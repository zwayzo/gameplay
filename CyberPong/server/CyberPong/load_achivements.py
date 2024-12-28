import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CyberPong.settings')
django.setup()

from userManagement.models import Achievements

def load_achievements():
    achievements = [
        {"name": "First Achievement", "requirements": "requirements of the first", "image": "images/first.png"},
        {"name": "Second Achievement", "requirements": "Description of the second", "image": "images/second.png"}
    ]
    for ach in achievements:
        Achievements.objects.create(**ach)

if __name__ == "__main__":
    load_achievements()
    print("Achievements loaded successfully.")