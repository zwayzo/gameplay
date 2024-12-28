# gameManagement/routing.py
from django.urls import path
from .consumers import GameConsumer

# WebSocket URL patterns
websocket_urlpatterns = [
    path('ws/socket-server/', GameConsumer.as_asgi()),  # Capture the integer 'id' from the URL
]
