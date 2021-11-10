from django.urls import path
from . import views

urlpatterns = [
   path('blogs/', views.BlogPostListView.as_view(), name="blog-post"),
]
