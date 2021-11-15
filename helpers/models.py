from django.db import models
import uuid

class BaseModel(models.Model):
   created_on = models.DateTimeField(auto_now_add=True)
   modified_on = models.DateTimeField(auto_now=True)
   is_deleted = models.BooleanField(default=False)
   uid = models.UUIDField(default=uuid.uuid4, editable=False)

   class Meta:
      abstract = True


