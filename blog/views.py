from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='userlogin')
def BlogHome(request):
    print(request.user)
    return render(request, 'blog/bloghome.html')