from django.shortcuts import render
from rest_framework import viewsets
from .models import Group
from .serializers import GroupSerializer

# Create your views here.
class GroupViewset(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer