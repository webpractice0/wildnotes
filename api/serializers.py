from blog.models import BlogPost
from rest_framework import serializers

class BlogPostSerialiser(serializers.ModelSerializer):
   class Meta:
      model = BlogPost
      fields = '__all__'
