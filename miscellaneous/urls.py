from django.urls import path
from . import views

urlpatterns = [
    path('carousel/', views.CarouselListView.as_view(), name='carousel-view'),   
]
