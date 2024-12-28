from rest_framework import serializers
from userManagement.serializers import ProfileSerializer
from .models import Tournement, Match, T_match

class tournament_list_seralizer(serializers.ModelSerializer):
    won = ProfileSerializer()
    lose = ProfileSerializer()
    class Meta:
        model=Tournement
        fields = ['id', 'won', 'lose', 'start_date', 'end_date', 'numberParticipants']


class matchSerializer(serializers.ModelSerializer):
    player1 = serializers.CharField(source='player1.user.username', read_only=True)
    player2 = serializers.CharField(source='player2.user.username', read_only=True)
    winner = serializers.CharField(source='winner.user.username', read_only=True)
    loser = serializers.CharField(source='loser.user.username', read_only=True)
    class Meta:
        model=Match
        fields = '__all__'


class T_matchSerializer(serializers.ModelSerializer):
    player1 = serializers.CharField(source='player1.username', read_only=True)
    player2 = serializers.CharField(source='player2.username', read_only=True)
    class Meta:
        model=T_match
        fields = ['player1', 'player2']