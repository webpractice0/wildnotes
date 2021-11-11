from blog.models import BlogPost
from rest_framework import serializers
from users.models import User

class BlogPostSerialiser(serializers.ModelSerializer):
   author = serializers.SlugRelatedField(slug_field='email', queryset=User.objects)
   class Meta:
      model = BlogPost
      fields = ('id','created_on','modified_on','is_deleted','uid','title','slug','description','image','author')
  