from django.shortcuts import render
from django.http import HttpResponse
import json

from userManagement.models import Profile
from .models import FriendRequest, FriendList
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.db.models import Q
from .utils import get_friend_list_or_None, isNum
from .serializer import FriendRequestSerializer

# Create your views here.


def are_friends(user1, user2):
    try:
        friend_list = FriendList.objects.get(user=user1)
        return friend_list.friends.filter(id=user2.id).exists()
    except FriendList.DoesNotExist:
        return False

@api_view(['POST'])
def send_friend_request(request, *args, **kwargs):
    user = request.user
    payload = {}
    receiver_username = request.data.get("receiver_username")

    if not user:
        payload['response'] = "Unable to send a friend request. User is not authenticated."
        return Response(payload, status=status.HTTP_401_UNAUTHORIZED)

    try:
        receiver = User.objects.get(username=receiver_username)
    except User.DoesNotExist:
        payload['response'] = "User with the specified username does not exist."
        return Response(payload, status=status.HTTP_404_NOT_FOUND)
    
    
    if user == receiver:
        payload["response"] = "You can't send a friend request to yourself."
        return Response(
            payload,
            status=status.HTTP_400_BAD_REQUEST
        )


    existing_requests = FriendRequest.objects.filter(
        (Q(sender=user, receiver=receiver) | Q(sender=receiver, receiver=user)),
        is_active=True
    )
    if existing_requests.exists() or are_friends(user,receiver):
        payload['response'] = "A friend request already exists between these users. 1 "
        return Response(payload, status=status.HTTP_400_BAD_REQUEST)

    try :
        friend_request = FriendRequest(sender=user, receiver=receiver, )
        friend_request.save()
    except IntegrityError:
        payload["response"] = "A friend request already exists between these users. 1"
        return Response(
            payload,
            status=status.HTTP_400_BAD_REQUEST
        )
    payload['response'] = "Friend request sent successfully."
    return Response(payload, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def accept_friend_request(request, *args, **kwargs):
    payload = {}
    user = request.user
    friend_request_id =  kwargs.get("friend_request_id")


    print("hell : ",friend_request_id)
    if not isNum(friend_request_id):
        payload['response'] = "request id is invalid"
        return Response(payload, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    if not user:
        payload['response'] = "Unable to accept the friend request. User is not authenticated."
        return Response(payload, status=status.HTTP_401_UNAUTHORIZED)

    if not friend_request_id:
        payload['response'] = "Friend request ID is required."
        return Response(payload, status=status.HTTP_400_BAD_REQUEST)

    try:
        friend_request = FriendRequest.objects.get(pk=friend_request_id)
    except FriendRequest.DoesNotExist:
        payload['response'] = "Friend request does not exist."
        return Response(payload, status=status.HTTP_404_NOT_FOUND)

    if friend_request.receiver != user:
        payload['response'] = "This is not your friend request to accept."
        return Response(payload, status=status.HTTP_403_FORBIDDEN)

    if not friend_request.is_active:
        payload['response'] = "This friend request is no longer active."
        return Response(payload, status=status.HTTP_400_BAD_REQUEST)

    try:
        friend_request.accept()
        payload['response'] = "Friend request accepted successfully."
        return Response(payload, status=status.HTTP_200_OK)

    except Exception as e:
        payload['response'] = f"An error occurred: {str(e)}"
        return Response(payload, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def remove_friend(request, *args, **kwargs):
    user = request.user
    payload = {}

    username = request.data.get("receiver_username")
    print(username)
    if username:
        try :
            removee = User.objects.get(username=username)
            friend_list = FriendList.objects.get(user=user)
            friend_list.unfriend(removee)
            payload['response'] = "Successfully removed that friend."
            return Response(payload, status=status.HTTP_200_OK)
        except Exception as e:
            payload['response'] = f"Something went wrong : {str(e)}"
    else :
        payload['response'] = "There was an error"
    return Response(payload, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def decline_friend_request(request, *args, **kwargs):
    payload = {}
    user = request.user
    friend_request_id = kwargs.get("friend_request_id")
    if not isNum(friend_request_id):
        payload['response'] = "request id is invalid"
        return Response(payload, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    if friend_request_id:
        friend_request = FriendRequest.objects.get(pk=friend_request_id)
        if friend_request.receiver == user:
            if friend_request:
                friend_request.decline()
                payload['response'] = "Friend request declined"
                return Response(payload, status=status.HTTP_200_OK)
            else:
                payload['response'] = "something went wrong"

        else :
             payload['response'] = "That is not your friend request to accept it."
    else :
        payload['response'] = "enable to accept"
    return Response(payload, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def cancel_friend_request(request, *args, **kwargs):
    payload = {}
    user = request.user
    friend_request_id = kwargs.get("friend_request_id")
    if friend_request_id:
        friend_request = FriendRequest.objects.get(pk=friend_request_id)
        if friend_request.receiver == user:
            if friend_request:
                friend_request.cancel()
                payload['response'] = "Friend request canceled"
                return Response(payload, status=status.HTTP_200_OK)
            else:
                payload['response'] = "something went wrong"
        else :
             payload['response'] = "Something wrong."
    else :
        payload['response'] = "enable to cancel"
    return Response(payload, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_friend_requests(request):
    user = request.user
    try:
        requests = FriendRequest.objects.filter(receiver=user)
        serializer = FriendRequestSerializer(requests, many=True)
        return Response({'friend_requests': serializer.data}, status=status.HTTP_200_OK)
    except FriendRequest.DoesNotExist:
        return Response({'friend_requests': []}, status=status.HTTP_200_OK)
    
