# Generated by Django 3.0.8 on 2020-11-08 09:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('monitor_app', '0015_messagelog'),
    ]

    operations = [
        migrations.AddField(
            model_name='messagelog',
            name='read',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='messagelog',
            name='group',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]