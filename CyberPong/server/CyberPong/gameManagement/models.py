from django.db import models
from userManagement.models import Profile
# Create your models here.


    # def __str__(self):

    #     return self.name


class Player(models.Model):
    username = models.CharField(max_length=50)


    

class Match(models.Model):
    player1 = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='matche_player_1')
    player2 = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='matche_player_2')
    tournement = models.ForeignKey("Tournement", on_delete=models.CASCADE, blank=True, null=True)
    score_player1 = models.IntegerField(null=True, blank=True)
    score_player2 = models.IntegerField(null=True, blank=True)
    winner = models.ForeignKey(Profile, related_name='won_matches', null=True, blank=True, on_delete=models.SET_NULL)
    loser = models.ForeignKey(Profile, related_name='lose_matches', null=True, blank=True, on_delete=models.SET_NULL)
    # player1_name = models.CharField(max_length=50)
    # player2_name = models.CharField(max_length=50)
    END_CHOICES = [
        ('true', 'True'),
        ('false', 'False'),
    ]
    
    # Define the field with the choices
    end = models.CharField(
        max_length=10,  # Maximum length for the string (you can adjust as needed)
        choices=END_CHOICES,  # Link the choices tuple
        default='False',  # Default value
    )
    def __str__(self):
        return f'Match between {self.player1} and {self.player2}'


class T_match(models.Model):
    player1 = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player1')
    player2 = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player2')
    
    score_player1 = models.IntegerField(null=True, blank=True)
    score_player2 = models.IntegerField(null=True, blank=True)
    winner = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='winner', null=True, blank=True)
    loser = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='loser', null=True, blank=True)
    END_CHOICES = [
        ('true', 'True'),
        ('false', 'False'),
    ]
    
    # Define the field with the choices
    end = models.CharField(
        max_length=10,  # Maximum length for the string (you can adjust as needed)
        choices=END_CHOICES,  # Link the choices tuple
        default='False',  # Default value
    )



class Tournement(models.Model):
    player1 = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player_1')
    player2 = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player_2')
    player3 = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player_3')
    player4 = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player_4')
    
    match1 = models.OneToOneField(T_match, on_delete=models.CASCADE, related_name='match1', default=None)
    match2 = models.OneToOneField(T_match, on_delete=models.CASCADE, related_name='match2', default=None)
    match3 = models.OneToOneField(T_match, on_delete=models.CASCADE, related_name='match3', default=None, null=True, blank=True)
    won = models.ForeignKey(Player, on_delete=models.CASCADE, null=True, blank=True)
    # numberParticipants = models.IntegerField()
    END_CHOICES = [
        ('true', 'True'),
        ('false', 'False'),
    ]
    end = models.CharField(
        max_length=10,  # Maximum length for the string (you can adjust as needed)
        choices=END_CHOICES,  # Link the choices tuple
        default='false',  # Default value
    )