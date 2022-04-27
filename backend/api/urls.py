from xml.etree.ElementInclude import include
from api import views
from rest_framework import routers
from django.urls import path
from django.urls import include, re_path
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)
router.register(r'events', views.EventViewset)
router.register(r'users', views.UserViewSet)



urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path('authenticate/', views.CustomObtainAuthToken.as_view())
]