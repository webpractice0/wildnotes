# Generated by Django 3.2.4 on 2021-11-15 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='author_pic',
            field=models.ImageField(blank=True, null=True, upload_to='static/images/author/'),
        ),
    ]
