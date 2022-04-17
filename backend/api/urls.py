from xml.etree.ElementInclude import include
from api import views
from rest_framework import routers
from django.urls import path
from django.conf import url, include

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)

urlpatterns = [
    path(r'^', include(router.urls)),
    
]