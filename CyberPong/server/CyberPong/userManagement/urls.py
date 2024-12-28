from django.urls import path, include, re_path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', view=views.home, name='home'),
    path('home/', view=views.home),
    # path('', playground_view.index, name='playground'),
    # path('MyProfile/', views.MyProfile, name='MyProfile'),

    
    path('api/register/',views.register, name='register'),
    path('api/login/',views.user_login, name='user_login'),
    path('api/logout/',views.logout, name='logout'),
    path('api/test_token/', views.test_token, name='test_token'),
    path('api/home/', views.home, name='home'),
    path('api/profile/', views.profile, name='profile'),
    path('api/login_intra/', views.loginView, name='login'),
    path('auth/callback/', views.callback, name='callback'),
    path('api/profile/<str:username>/', views.view_profile, name='profile'),
    # path("verify-2fa/", views.verify_otp, name="verify_otp"),
]
