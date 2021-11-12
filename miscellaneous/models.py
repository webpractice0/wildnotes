from django.db import models
from helpers.models import BaseModel

class Carousel(BaseModel):
   image = models.ImageField(upload_to='static/images/misc/', blank=True, null=True)
   image_url = models.URLField()
   image_alt = models.CharField(max_length=200)
   main_text = models.CharField(max_length=250)
   sub_text = models.CharField(max_length=250)
   sliding_timing = models.PositiveIntegerField()

   def __str__(self) -> str:
       return self.image_alt


