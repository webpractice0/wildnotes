# Generated by Django 3.2.4 on 2021-11-10 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(default='User_JCCb3xgV0Q', max_length=100),
        ),
    ]