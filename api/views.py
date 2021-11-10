from django.shortcuts import render
from blog.models import BlogPost
from .serializers import BlogPostSerialiser
from rest_framework import generics

class BlogPostListView(generics.ListAPIView):
   # model = BlogPost
   queryset = BlogPost.objects.all()
   serializer_class = BlogPostSerialiser
