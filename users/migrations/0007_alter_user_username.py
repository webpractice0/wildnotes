# Generated by Django 3.2.4 on 2021-11-17 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(default='User_MxQediIHzw', max_length=100),
        ),
    ]
