from django import forms
from django.contrib.auth.models import User
from .models import Profile


class profileForm(forms.ModelForm):
    username = forms.CharField(required=False)
    password = forms.CharField(required=False)
    email = forms.EmailField(required=False)
    first_name = forms.CharField(required=False)
    last_name = forms.CharField(required=False)
    photo = forms.FileInput()

    class Meta:
        model = Profile
        fields = ['username', 'email', 'first_name', 'last_name', 'photo', 'password']
        


class LoginForm(forms.Form):
    username = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'input-box', 'placeholder': 'Enter your name'})
    )
    password = forms.CharField(widget=forms.PasswordInput(attrs={
            'class': 'input-box',
            'placeholder': 'Enter your password'
        }),
        label="Password",)

class UserRegitrationForm(forms.ModelForm):
    password = forms.CharField(label='Password',widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password',widget=forms.PasswordInput)
    
    class Meta:
        model = User
        fields = ('username', 'email')         
    
    def clean_password2(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2'] :
            raise forms.ValidationError('Password dont match')
        return cd['password2']
            

class UserEditForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')
