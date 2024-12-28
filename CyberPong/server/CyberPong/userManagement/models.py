from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.timezone import now
from datetime import timedelta


AUTHENTICATION_CHOICES = (
    ('email', 'Email'),
    ('intra', 'Intra'),
)

FRIENDSHIP_STATUS = (
    ('send', 'send'),
    ('accepted', 'accepted'),
    ('rejected','rejected')
)

class Achievements(models.Model):
    name = models.CharField(max_length=100, unique=True)
    requirements = models.TextField()
    image = models.ImageField(upload_to='achievements/', blank=True, null=True)

    def __str__(self):
        return self.name
    

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='media/' , blank=True)
    authenticated_with = models.CharField(choices=AUTHENTICATION_CHOICES,default='email')
    achievements = models.ManyToManyField(Achievements, through='ProfileAchievement', blank=True, related_name='profiles')
    last_activity = models.DateTimeField(default=now)

    # def get_friends(self):
    #     return self.friends.all()
    
    # def get_friends_number(self):
    #     return self.friends.all().count()
    def is_online(self):
        return now() - self.last_activity <= timedelta(minutes=1)
    def __str__(self):
        return 'Profile for user {}'.format(self.user.username)



class ProfileAchievement(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    achievement = models.ForeignKey(Achievements, on_delete=models.CASCADE)
    assigned_at = models.DateTimeField(default=now)
    class Meta:
        unique_together = ('profile', 'achievement')
    

class Statistics(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    games_played = models.IntegerField(default=0)
    games_won = models.IntegerField(default=0)
    tournaments_won = models.IntegerField(default=0)
    win_streak = models.IntegerField(default=0)

    def win_rate(self):
        return (self.games_won / self.games_played * 100) if self.games_played > 0 else 0


# class Friendship(models.Model):
#     sender = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='sender')
#     receiver = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='receiver')
#     status = models.CharField(max_length=8, choices=FRIENDSHIP_STATUS)
#     created = models.DateTimeField(default=now)
#     updated = models.DateTimeField(auto_now_add=True)
