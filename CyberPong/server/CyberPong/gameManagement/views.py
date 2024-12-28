from django.http.response import HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import Tournement, Match, Player, T_match
from userManagement.serializers import ProfileSerializer
from .serializers import tournament_list_seralizer, matchSerializer, T_matchSerializer
from userManagement.models import Profile, User 
from django.http import HttpResponse
from django.http import JsonResponse
from django.db.models import Q


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
  

def test(request):
    return render(request, 'gameManagement/test.html')

# View for listing all tournaments
@api_view(['GET'])
def tournament_list(request):
    tournaments = Tournement.objects.all()
    tournaments_serializer = tournament_list_seralizer(tournaments, many=True)

    return Response(tournaments_serializer.data)

# View for displaying details of a specific tournament
@api_view(['GET'])
def tournament_detail(request, tournament_id):
    tournament = get_object_or_404(Tournement, id=tournament_id)
    tournaments_serializer = tournament_list_seralizer(tournament)
    return Response(tournaments_serializer.data)

# View for creating a match
@api_view(['POST'])
def creat_match(request):
    if request.method == 'POST':
        try:
            player_1 = Profile.objects.get(user=User.objects.get(username=request.data.get('player1')))
            player_2 = Profile.objects.get(user=User.objects.get(username=request.data.get('player2')))
            match = Match(player1=player_1, player2=player_2, end=False)
            match.save()
            return Response(
                {f'id:{match.id}'}, 
                status=status.HTTP_200_OK
            )       
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


@api_view(['POST'])
def end_match(request):
    if request.method == 'POST':
        try:
            match = Match.objects.get(id=request.data.get('id'))
            match.end = True
            match.save()
            winner = Profile.objects.get(user=User.objects.get(username=request.data.get('winner')))
            loser = Profile.objects.get(user=User.objects.get(username=request.data.get('loser')))


            match.winner = winner
            match.loser = loser
            score_winner = request.data.get('score_winner')
            score_loser = request.data.get('score_loser')
            match.score_player1 = score_winner if match.player1 == winner else score_loser
            match.score_player2 = score_loser if match.player2 == loser else score_winner
            match.save()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


@api_view(['GET'])
def match_details(request, id):
    if request.method == 'GET':
        try:
            match = get_object_or_404(Match, id=id)
            match_serializer = matchSerializer(match)
            winner_user = match.winner.user
            loser_user = match.loser.user
            
            profile_winner = get_object_or_404(Profile, user=winner_user)
            profile_loser = get_object_or_404(Profile, user=loser_user)
            
            profile_winner_serializer = ProfileSerializer(profile_winner)
            profile_loser_serializer = ProfileSerializer(profile_loser)
            
            if match.winner == match.player1:
                winner_score = match.score_player1
                loser_score = match.score_player2
            elif match.winner == match.player2:
                winner_score = match.score_player2
                loser_score = match.score_player1
                match_serializer.data['score_player2'] = winner_score
                match_serializer.data['score_player1'] = loser_score
            response_data = {
                "winner": {
                    **profile_winner_serializer.data,
                    "score": winner_score,
                },
                "loser": {
                    **profile_loser_serializer.data,
                    "score": loser_score
                }
            }
            return Response(response_data, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


@api_view(['GET'])
def userMatches_History(request, username):
    user = get_object_or_404(User, username=username)
    matches = Match.objects.filter(
    Q(player1=user.id) | Q(player2=user.id)
).order_by('id')
    
    serializer = matchSerializer(matches, many=True)    
    return Response(serializer.data) 
    
@api_view(['GET'])
def AllMatches(request):
    if request.method == 'GET':
        matches = Match.objects.all().order_by('id')
        serializer = matchSerializer(matches, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

@api_view(['POST'])
def startTournement(request):
    player1 = Player(username=request.data.get('player1'))
    player2 = Player(username=request.data.get('player2'))
    player3 = Player(username=request.data.get('player3'))
    player4 = Player(username=request.data.get('player4'))
    player1.save()
    player4.save()
    player3.save()
    player2.save()
    match1 = T_match(player1=player1, player2=player2)
    match2 = T_match(player1=player3, player2=player4)
    match1.save()  # Save match1 before using it in Tournement
    match2.save() 
    tornement = Tournement(player1=player1, player2=player2, player3=player3, player4=player4, match1=match1, match2=match2)
    tornement.save()
    match_serializer = T_matchSerializer(tornement.match1)
    return Response(match_serializer.data,
        status=status.HTTP_200_OK)

def set_theMatch(request):
    winner = Player.objects.get(username=request.data.get('won'))
    loser = Player.objects.get(username=request.data.get('lose'))
    
    match = T_match.objects.get(
        Q(player1=winner) | Q(player2=winner),
        end=False
    )
    match.winner=winner
    match.loser=loser
    match.end = True
    match.save()

@api_view(['POST'])
def second_match_Tournement(request):
    set_theMatch(request)
    tournement = Tournement.objects.get(id__gt=1)
    match_serializer = T_matchSerializer(tournement.match2)
    return Response(match_serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def match_final(request):
    set_theMatch(request)
    tournament = Tournement.objects.get(id__gt= 1)
    player1 = tournament.match1.winner
    player2 = tournament.match2.winner
    match3 = T_match(player1=player1, player2=player2)
    match3.save()

    tournament.match3 = match3
    tournament.save()
    match_serializer = T_matchSerializer(tournament.match3)
    return Response(match_serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def tournament_end(request):

    set_theMatch(request)
    tournament = Tournement.objects.get(id__gt = 1)
    tournament.won = Player.objects.get(username=request.data.get('won'))
    tournament.end = True
    tournament.save()

    return Response(
        {'winner': tournament.won.username},
        status=status.HTTP_200_OK
    )

@api_view(['POST'])
def Destroy_data(request):
    Player.objects.filter(id__gt=1).delete()
    T_match.objects.filter(id__gt=1).delete()
    Tournement.objects.filter(id__gt=1).delete()
    return Response(status=status.HTTP_200_OK)
