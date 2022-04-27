from django.contrib import admin
from .models import Group, Event, UserProfile


# Register your models here.
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fields = ('user', 'image')
    list_display = ('id', 'user', 'image')

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ('name', 'location' , 'description')
    list_display = ('id', 'name', 'location', 'description')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    fields = ('team1', 'team2', 'time', 'score1', 'score2', 'group')
    list_display = ('team1', 'team2', 'time', 'score1', 'score2', 'group')
