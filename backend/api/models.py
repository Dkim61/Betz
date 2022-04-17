from enum import unique
from django.db import models

# Create your models here.
class Group(models.Model):
    name = models.CharField(max_length=32, null= False, unique= False)
    location = models.CharField(max_length=32, null= False)
    description = models.CharField(max_length=256, null= False, unique= False)

    class Meta:
        # means you cannot have the same name/location combo
        unique_together = (('name', 'location'))
        