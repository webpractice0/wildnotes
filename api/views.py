from django.shortcuts import render
from blog.models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework import generics

class BlogPostListView(generics.ListAPIView):
   # model = BlogPost
   queryset = BlogPost.objects.all()
   serializer_class = BlogPostSerializer

class BlogPostRetrieveView(generics.RetrieveAPIView):
   queryset = BlogPost.objects.all()
   serializer_class = BlogPostSerializer
   lookup_field = 'uid'
