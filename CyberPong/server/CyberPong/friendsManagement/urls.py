from django.urls import path

from friendsManagement.views import send_friend_request, remove_friend, cancel_friend_request, decline_friend_request, accept_friend_request,get_friend_requests


urlpatterns = [
    path('friend_remove/', view=remove_friend, name='remove_friend'),
    path('friend_request/', view=send_friend_request, name='friend_request'),
    path('accept_friend_request/<friend_request_id>/', view=accept_friend_request, name='friend_request_accept'),
    path('cancel_friend_request/<friend_request_id>/', view=cancel_friend_request, name='cancel_friend_request'),
    path('decline_friend_request/<friend_request_id>/', view=decline_friend_request, name='decline_friend_request'),
    path('get_friend_requests/', view=get_friend_requests, name='friend_requests')

]
