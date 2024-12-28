from django.urls import path
from . import views

urlpatterns = [
    path('', views.test, name='test'),
    # path('create_match/', views.create_match, name='creat_match'),
    path('tournament/<int:tournament_id>/', views.tournament_detail, name='tournament_detail'),
    # path('<int:tournament_id>/create_match/', views.create_match, neame='create_match'),
    path('api/creat_match/', views.creat_match, name="creat_match"),
    path('api/end_match/', views.end_match, name="end_match"),
    path('api/match_details/<int:id>/', views.match_details, name="match_details"),
    path('api/userMatches_History/<str:username>/', views.userMatches_History, name="userMatches_History"),
    path('api/AllMatches/', views.AllMatches, name="AllMatches"),
    path('api/startTournement/', views.startTournement, name="startTournement"),

    path('api/startTournement/', views.startTournement, name="startTournement"),
    path('api/second_match_Tournement/', views.second_match_Tournement, name="second_match_Tournement"),
    path('api/match_final/', views.match_final, name="match_final"),
    path('api/tournament_end/', views.tournament_end, name="tournament_end"),
    path('api/Destroy_data/', views.Destroy_data, name="Destroy_data"),
    
]