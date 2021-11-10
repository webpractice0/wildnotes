from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from .models import BlogPost
# Create your views here.

@login_required(login_url='userlogin')
def BlogHome(request):
    all_blog_posts = BlogPost.objects.all()
    print(request.user)
    context = {
        'all_blogs': all_blog_posts
    }
    return render(request, 'blog/bloghome.html', context)