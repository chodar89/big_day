from django.shortcuts import render

# Create your views here.


def contact(request):
    """
    Render contact page
    """

    return render(request, 'pages/contact.html')
