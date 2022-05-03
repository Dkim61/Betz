from xml.etree.ElementInclude import include
from api import views
from rest_framework import routers
from django.urls import include, re_path
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'profile', views.UserProfileViewSet)
router.register(r'members', views.MemberViewSet)
router.register(r'comments', views.CommentViewSet)
router.register(r'bets', views.BetViewSet)




urlpatterns = [
    re_path(r'^', include(router.urls)),
    re_path('authenticate/', views.CustomObtainAuthToken.as_view())
]