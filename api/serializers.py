from blog.models import BlogPost
from rest_framework import serializers
from users.models import User

class BlogPostSerializer(serializers.ModelSerializer):
   author = serializers.SlugRelatedField(slug_field='email', queryset=User.objects)
   custom_datetime = serializers.ReadOnlyField()
   briefed_description = serializers.ReadOnlyField()
   class Meta:
      model = BlogPost
      fields = ('id','custom_datetime','modified_on','is_deleted','uid','title','slug','description','image','author','briefed_description')
  