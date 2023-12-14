from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from django.template import loader
from .models import Products

def index(request):
    template = loader.get_template("store/index.html")
    context = {
        "test": 0
    }
    return HttpResponse(template.render(context, request))


def likiery(request):
    template = loader.get_template("store/likiery.html")
    context = {
        "test": 0
    }
    return HttpResponse(template.render(context, request))


def whisky(request):
    template = loader.get_template("store/whisky.html")
    context = {
        "test": 0
    }
    return HttpResponse(template.render(context, request))


def wodka(request):
    template = loader.get_template("store/wodka.html")
    context = {
        "test": 0
    }
    return HttpResponse(template.render(context, request))


def wodka(request):
    products = Products.objects.all()
    context = {
        'products': products,
    }
    return render(request, 'store/wodka.html', context)