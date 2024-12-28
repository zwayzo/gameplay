from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, Statistics, Achievements


class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        exclude = ['password','is_superuser', 'is_staff','is_active','groups','user_permissions','last_login']


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['user', 'authenticated_with', 'photo']


class StatisticsSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = Statistics
        fields = ['profile', 'games_played', 'games_won', 'tournaments_won', 'win_streak']


class AcheivementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievements
        fields = ['name', 'requirements', 'image']