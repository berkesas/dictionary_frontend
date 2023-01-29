from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect

# Create your views here.
def index(request):
    return render(request,'translation/index.html',{})

@csrf_exempt
def api(request):
    return JsonResponse([{'name': 'Dictionary1', 'word':'apple', 'translations':['alma','alma agajy']}],safe=False)