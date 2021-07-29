from django.contrib import admin
from django.urls import path, include
from django.urls.resolvers import URLPattern
# from .views import todolistView, update, delete

from .views import (
    TodoListView,
    TodoListCreateView,
    TodoListUpdateView,
    TodoListDetailView,
    TodoListDestroyView
)


urlpatterns = [
    # path('', todolistView.as_view(), name='todolist'),
    # path('update/<pk>/', update, name='update'),
    # path('delete/<pk>/', delete, name='delete'),
    
    path('', TodoListView.as_view(), name='todolist'),
    path('create', TodoListCreateView.as_view(), name='create'),
    path('detail/<pk>/', TodoListDetailView.as_view(), name='detail'),
    path('edit/<pk>/', TodoListUpdateView.as_view(), name='edit'),
    path('delete/<pk>/', TodoListDestroyView.as_view(), name='delete'),

]
