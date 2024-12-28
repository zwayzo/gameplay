from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile,Statistics
from friendsManagement.models import FriendList

@receiver(post_save, sender=Profile)
def create_statistics(sender, instance, created , **kwargs):
    if created:
        Statistics.objects.create(profile=instance)


@receiver(post_save, sender=User)
def create_friend_list(sender, instance, created, **kwargs):
    if created:
        FriendList.objects.create(user=instance)
