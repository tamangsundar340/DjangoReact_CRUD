# Generated by Django 3.2.4 on 2021-07-29 07:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_todolist_completed'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todolist',
            name='completed',
        ),
    ]
