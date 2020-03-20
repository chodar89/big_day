from django.shortcuts import render

# Create your views here.


def booking(request):
    """
    Render booking page
    """
    return render(request, 'pages/booking.html')
