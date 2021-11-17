# from django.shortcuts import render
from rest_framework import viewsets

class ProductViewSet(viewsets.ViewSet):

    # /api/products
    def list(self, request):
        pass
    
    # /api/products
    def create(self, request):
        pass

    # /api/products/<str:id>
    def retrieve(self, request, pk=None):
        pass

    # /api/products/<str:id>
    def update(self, request, pk=None):
        pass

    # /api/products/<str:id>
    def delete(self, request, pk=None):
        pass