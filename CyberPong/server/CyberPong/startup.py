import os
from django.contrib.auth.models import User
from django.contrib.sites.models import Site

# Check if superuser already exists
if not User.objects.filter(username=os.getenv('DJANGO_SUPERUSER_USERNAME')).exists():
    User.objects.create_superuser(
        username=os.getenv('DJANGO_SUPERUSER_USERNAME'),
        email=os.getenv('DJANGO_SUPERUSER_EMAIL'),
        password=os.getenv('DJANGO_SUPERUSER_PASSWORD'),
    )
    print("Superuser created successfully.")
else:
    print("Superuser already exists.")

site_domain = 'localhost'
site_name = 'localhost'

if not Site.objects.filter(domain=site_domain).exists():
    site = Site(domain=site_domain, name=site_name)
    site.save()
    print(f"Site object created successfully: {site_domain}")
else:
    print(f"Site object with domain {site_domain} already exists.")