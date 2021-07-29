from .serializers import TodoListSerializers
from core.models import TodoList

# from rest_framework.permissions import IsAuthenticated
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.decorators import api_view

from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    DestroyAPIView
)




# class todolistView(APIView):
#     permission_classes = (IsAuthenticated,)

#     def get(self, request):
#         todolist = TodoList.objects.all()
#         serializer = TodoListSerializers(todolist, many=True)
#         return Response(serializer.data)
    
#     def post(self, request):
#         serializer = TodoListSerializers(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response("Added succesfully")
#         else:
#             return Response("Something went wrong")   
        

# @api_view(['POST'])
# def update(request, pk):
#     todolist = TodoList.objects.get(id=pk)
#     serializer = TodoListSerializers(instance=todolist, data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response("Data updated successfully")
#     else:
#         return Response("Something went wrong")
    

    
# @api_view(['DELETE'])
# def delete(request, pk):
#     todoList = TodoList.objects.get(id=pk)
#     todoList.delete()
#     return Response("Deleted successfully")

class TodoListView(ListAPIView):
    queryset = TodoList.objects.all()
    serializer_class =  TodoListSerializers

class TodoListCreateView(CreateAPIView):
    queryset = TodoList.objects.all()
    serializer_class =  TodoListSerializers
    
class TodoListDetailView(RetrieveAPIView):
    queryset = TodoList.objects.all()
    serializer_class =  TodoListSerializers
    
class TodoListUpdateView(UpdateAPIView):
    queryset = TodoList.objects.all()
    serializer_class =  TodoListSerializers
    
class TodoListDestroyView(DestroyAPIView):
    queryset = TodoList.objects.all()
    serializer_class =  TodoListSerializers
