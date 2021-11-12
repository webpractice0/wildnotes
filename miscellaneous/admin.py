from django.contrib import admin
from django.contrib.admin.decorators import display
from .models import Carousel

@admin.register(Carousel)
class CarouselAdmin(admin.ModelAdmin):
   display_list = '__all__'
