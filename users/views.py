from django.contrib.auth.forms import PasswordChangeForm
from django.shortcuts import render, redirect
from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.decorators import login_required

# Create your views here.
def UserRegister(request):
    form = CreateUserForm()
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'An account has been created for '+'\''+request.POST['email']+'\''+'!')
            return redirect('userlogin')
        else:
            messages.error(request, 'Oops! Something went wrong. Try again.')
    context = {
        'form': form
    }
    return render(request, 'users/register.html', context)

def UserLogin(request):
    if request.user.is_authenticated:
        messages.warning(request, 'Bro, you are already logged in!')
        return redirect('bloghome')

    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'Successfully logged in!')
            return redirect('bloghome')
        else:
            messages.error(request, 'Enter valid credentials.')
    context = {

    }
    return render(request, 'users/login.html', context)

@login_required(login_url='userlogin')
def UserLogout(request):
    logout(request)
    messages.success(request, 'Successfully logged out.')
    return redirect('userlogin')


def UserPasswordChange(request):
    form = PasswordChangeForm(request.user)
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)
            messages.success(request, 'Your password has been updated successfully!')
            return redirect('userlogout')
        else:
            messages.error(request, 'Please correct the errors below!')
    context = {
        'form': form
    }
    return render(request, 'users/changepassword.html', context)

