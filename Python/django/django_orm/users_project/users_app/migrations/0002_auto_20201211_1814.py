# Generated by Django 2.2.4 on 2020-12-11 23:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='age',
            field=models.IntegerField(max_length=5),
        ),
    ]
