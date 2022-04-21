from xml.etree.ElementInclude import include
from api import views
from rest_framework import routers
from django.urls import path
from django.urls import include, re_path

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)
router.register(r'events', views.EventViewset)

urlpatterns = [
    re_path(r'^', include(router.urls)),
    
]