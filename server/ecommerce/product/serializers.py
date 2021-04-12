from .models import Product, Category

from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = (
      'id',
      'name',
      'get_absolute_url',
      'description',
      'price',
      'get_image',
      'get_thumbnail',
      'date_added',
    )
    