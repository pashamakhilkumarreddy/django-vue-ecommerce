from django.urls import path, include

from product import views

urlpatterns = [
  path('latest-products/', views.LatestProductsList.as_view()),
  path('product/<slug:category_slug>/<slug:product_slug>/', views.ProductDetail.as_view())
]