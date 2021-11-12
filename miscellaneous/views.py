from django.shortcuts import render
from miscellaneous.serializers import CarouselSerializer
from rest_framework import generics
from .models import Carousel

class CarouselListView(generics.ListAPIView):
   queryset = Carousel.objects.all()
   serializer_class = CarouselSerializer