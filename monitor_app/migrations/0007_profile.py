# Generated by Django 3.0.8 on 2020-10-29 15:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
        ('monitor_app', '0006_growthrate_time'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('verification', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'Profile',
            },
        ),
    ]
