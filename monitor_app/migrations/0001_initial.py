# Generated by Django 3.0.8 on 2020-09-21 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Temperature',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('temperature', models.FloatField(blank=True, default=None, null=True)),
                ('time', models.DateTimeField()),
            ],
            options={
                'verbose_name_plural': 'temperatures',
            },
        ),
    ]
