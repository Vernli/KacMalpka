from django.urls import path
from .views import wodka

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("index.html", views.index, name="index"),
    path("likiery.html", views.likiery, name="index"),
    path("whisky.html", views.whisky, name="index"),
    path("wodka.html", views.wodka, name="index"),
    path('wodka/', wodka, name='wodka'),
]
