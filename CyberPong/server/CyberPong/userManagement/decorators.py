from django.shortcuts import render, redirect
from functools import wraps

def redirect_authenticated_user(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('MyProfile')
        return view_func(request, *args, **kwargs)
    return wrapper