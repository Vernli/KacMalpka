from rest_framework import serializers
from .models import Roles, Users, Addresses, Transactions, Products, Tags, Prices,\
    Reviews, ProductTags, TransactionProducts

class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = ['role_id', 'role_name']
