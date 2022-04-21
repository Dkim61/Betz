from email.headerregistry import Group
from rest_framework import serializers
from .models import Group
from .models import Event



# Needs to be above GroupSerializer bc it works top/down and needs to go above serializer with foreign key
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'team1', 'team2', 'time', 'score1', 'score2', 'group')

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', 'description')

class GroupFullSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True)
    class Meta:
        model = Group
        fields = ('id', 'name', 'location', 'description', 'events')


