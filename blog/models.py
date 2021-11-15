from django.db import models
from helpers.models import BaseModel
from django.contrib.auth import get_user_model as UserModel

class BlogPost(BaseModel):
    title = models.CharField(max_length=250)
    slug = models.SlugField(verbose_name="blog_post_slug", null=True, blank=True)
    description = models.TextField()
    image = models.ImageField(upload_to='static/images/', blank=True, null=True)
    author = models.ForeignKey(UserModel(), on_delete=models.CASCADE)
    author_pic = models.ImageField(upload_to='static/images/author/', blank=True, null=True)

    def __str__(self) -> str:
        return str(self.title) + ' by: '+str(self.author)
    
    @property
    def custom_datetime(self):
        return self.created_on.strftime('%Y-%m-%d %H:%m')