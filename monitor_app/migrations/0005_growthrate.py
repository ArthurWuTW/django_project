# Generated by Django 3.0.8 on 2020-09-28 00:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monitor_app', '0004_timeprice'),
    ]

    operations = [
        migrations.CreateModel(
            name='GrowthRate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plant_id', models.IntegerField(blank=True, null=True)),
                ('rate', models.FloatField(blank=True, default=None, null=True)),
            ],
            options={
                'verbose_name_plural': 'GrowthRate',
            },
        ),
    ]
