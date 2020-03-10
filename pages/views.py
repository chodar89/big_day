from django.shortcuts import render


def index(request):
    """
    Render index page
    """
    return render(request, 'pages/index.html')


def about(request):
    """
    Render index page
    """
    return render(request, 'pages/about.html')


def my_gear(request):
    """
    Render index page
    """
    return render(request, 'pages/my_gear.html')
