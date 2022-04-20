from django.contrib import admin
from .models import Group


# Register your models here.
@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ('name', 'location' , 'description')
    list_display = ('id', 'name', 'location', 'description')