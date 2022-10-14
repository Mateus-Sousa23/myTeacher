from django.forms import ValidationError
from rest_framework import serializers
from teacher.models import Teacher, Classroom


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__' 
        


class RegisterClassSeralizer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)

    def validate_name(selfmessage, value):
        if len(value) < 3:
            raise ValidationError("Deve ter pelo menos três caracteres.")
        return value
    

class ClassRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classroom
        fields = '__all__' 
