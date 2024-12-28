from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import login, SESSION_KEY, BACKEND_SESSION_KEY, logout , login, authenticate
from allauth.socialaccount.models import SocialAccount
from django.http import JsonResponse, HttpResponse
from django.conf import settings
from .models import Profile, User, Statistics, Achievements, ProfileAchievement
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from .serializers import UserSerializer, ProfileSerializer, StatisticsSerializer, AcheivementsSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
import requests
from django.core.exceptions import ObjectDoesNotExist

from friendsManagement.models import FriendList



""""
    Authentication :
        - basic registration 
        - registration using intra
        - login
        - logout
"""

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        profile = Profile(authenticated_with='email', user=user)
        profile.save()
        return Response({"token": token.key , "user":serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')


    if not username or not password:
        return Response({'details':'username or password not provided'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'detail':'Incorrect credentials'}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({'token':token.key, 'user':serializer.data})


@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def test_token(request):
    print(request.user)
    return Response("passed for {}".format(request.user.username))


@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
@api_view(['POST'])
def logout(request):
    try:
        request.user.auth_token.delete()
        return Response({'details': "User {} logged out".format(request.user.username)}, status=status.HTTP_200_OK)
    except Token.DoesNotExist:
        return Response({'details': f"User {request.user.username} is not logged in"}, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET'])
def home(request):
    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
def loginView(request):
    # Redirect to 42 API's OAuth authorization URL

    auth_url = f"https://api.intra.42.fr/oauth/authorize"
    params = {
        "client_id": settings.CLIENT_ID,
        "redirect_uri": settings.REDIRECT_URI,
        "response_type": "code",
    }
    return redirect(f"{auth_url}?client_id={params['client_id']}&redirect_uri={params['redirect_uri']}&response_type=code")


@api_view(['GET'])
def callback(request):
    # Retrieve the authorization code
    code = request.GET.get('code')
    if not code:
        return JsonResponse({"error": "Authorization code not found"}, status=400)

    # Exchange code for access token
    token_url = "https://api.intra.42.fr/oauth/token"
    data = {
        "grant_type": "authorization_code",
        "client_id": settings.CLIENT_ID,
        "client_secret": settings.CLIENT_SECRET,
        "code": code,
        "redirect_uri": settings.REDIRECT_URI,
    }
    token_response = requests.post(token_url, data=data)
    token_data = token_response.json()
    
    if "access_token" not in token_data:
        return JsonResponse({"error": "Failed to retrieve access token"}, status=400)
    
    access_token = token_data.get("access_token")

    # Fetch user data from 42 API
    user_url = "https://api.intra.42.fr/v2/me"
    headers = {"Authorization": f"Bearer {access_token}"}
    user_response = requests.get(user_url, headers=headers)
    user_data = user_response.json()

    mylogin = user_data["login"]
    email = user_data.get("email")
    first_name = user_data.get("first_name", "DefaultFirst")
    last_name = user_data.get("last_name", "DefaultLast")

    user, created = User.objects.get_or_create(
        username=mylogin,
        defaults={'email': email, 'first_name': first_name, 'last_name': last_name}
    )
    if created:
        user.set_unusable_password()
        user.save()
    profile, created = Profile.objects.get_or_create(
        user=user,
        defaults={'authenticated_with': 'intra'}
    )
    token, _ = Token.objects.get_or_create(user=user)
    login(request, user, backend='django.contrib.auth.backends.ModelBackend')
    serializer = ProfileSerializer(profile)
    return Response({"token": token.key ,"profile_data": serializer.data}, status=status.HTTP_200_OK)



def get_profile_details(request):
    """
    Helper function to gather and format profile data.
    This is called for both GET and POST methods to ensure consistent response.
    """
    profile = get_object_or_404(Profile, user=request.user)
    user_stats = get_object_or_404(Statistics, profile=profile)
    stats_serializer = StatisticsSerializer(user_stats)
    
    # Get achievements for the user (assuming a function or API)
    achievements_response = get_user_achievements(request)
    if achievements_response.status_code == status.HTTP_200_OK:
        achievements_data = achievements_response.data
    else:
        achievements_data = []
    
    # Retrieve the list of friends
    try:
        friend_list = FriendList.objects.get(user=request.user)
        friends = [
            {'user': friend.username, 'is_online': friend.profile.is_online()}
            for friend in friend_list.friends.all()
        ]
    except FriendList.DoesNotExist:
        friends = []
    
    # Return the gathered data in the same format for both GET and POST
    return {
        'user_stats': stats_serializer.data,
        'achievements': achievements_data,
        'friends': friends,
        'is_online': profile.is_online(),
    }

@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
@api_view(['GET', 'POST'])
def profile(request, *args, **kwargs):
    if request.method == 'GET':

        user_id = kwargs.get("user_id")
        profile = get_object_or_404(Profile, user=request.user)
        user_stats = get_object_or_404(Statistics, profile=profile)
        stats_serializer = StatisticsSerializer(user_stats)

        # assign_user_achievements(request, acheivement_name="Second Achievement")
        
        return Response(
            get_profile_details(request), 
            status=status.HTTP_200_OK)

    elif request.method == 'POST':
        profile = get_object_or_404(Profile, user=request.user)
        user_data = request.data.get('user', {})
        profile_data = request.data.get('profile', {})

        user_data.pop('password', None)
        user_serializer = UserSerializer(request.user, data=user_data, partial=True)
        if user_serializer.is_valid():
            updated_user = user_serializer.save()

            profile_serializer = ProfileSerializer(profile, data=profile_data, partial=True)
            if profile_serializer.is_valid():
                profile.user = updated_user
                profile_serializer.save()

                return Response(
                    get_profile_details(request), 
                    status=status.HTTP_200_OK)
            else:
                return Response({
                    "user_errors": user_serializer.errors,
                    "profile_errors": profile_serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)

        return Response({
            "user_errors": user_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def view_profile(request, *args, **kwargs):
    username = kwargs.get("username")
    if not username:
        return Response({"error": "Username not provided"}, status=status.HTTP_400_BAD_REQUEST)
    user = get_object_or_404(User, username=username)
    profile = get_object_or_404(Profile, user=user)
    stats = get_object_or_404(Statistics, profile=profile)
    stats_serializer = StatisticsSerializer(stats)
    profile_serializer = ProfileSerializer(profile)
    return Response({
        "user": user.username,
        "profile": profile_serializer.data,
        "stats": stats_serializer.data
    }, status=status.HTTP_200_OK)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_user(request, username):
    user = User.objects.filter(username__icontains=username)
    if not user.exists():
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



def get_user_achievements(request):
    profile = get_object_or_404(Profile, user=request.user)
    achievements = profile.achievements.all()
    if not achievements.exists():
        return Response({"achievements": []}, status=status.HTTP_404_NOT_FOUND)

    serializer = AcheivementsSerializer(achievements, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)




def assign_user_achievements(request, acheivement_name):
    profile = get_object_or_404(Profile, user=request.user)

    achievement = Achievements.objects.filter(name=acheivement_name).first()
    if not achievement:
        return Response({"error": "Achievement not found"}, status=status.HTTP_404_NOT_FOUND)

    profile_achievement, created = ProfileAchievement.objects.get_or_create(
        profile=profile, achievement=achievement
    )
    if created:
        return Response({"message": f"Achievement '{achievement.name}' assigned successfully"}, status=status.HTTP_200_OK)
    else:
        return Response({"message": f"Achievement '{achievement.name}' already assigned"}, status=status.HTTP_200_OK)
    

