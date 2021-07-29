from django.db.models import fields
from rest_framework import serializers
from core.models import TodoList


        
class TodoListSerializers(serializers.ModelSerializer):
    class Meta:
        model = TodoList
        fields = "__all__"