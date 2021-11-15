from django.urls import path
from . import views

urlpatterns = [
   path('blogs/', views.BlogPostListView.as_view(), name="blog-post"),
   path('blog/retrieve/<str:uid>/view/', views.BlogPostRetrieveView.as_view(), name="blog-retrieve"),
]
