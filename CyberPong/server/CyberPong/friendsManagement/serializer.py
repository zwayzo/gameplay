from .models import FriendRequest
from rest_framework import serializers
from userManagement.serializers import UserSerializer


class FriendRequestSerializer(serializers.ModelSerializer):
    sender = UserSerializer()
    receiver = UserSerializer()
    
    class Meta:
        model = FriendRequest
        fields = '__all__'

    