# Generated by Django 3.0.8 on 2020-11-06 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monitor_app', '0013_plantdata_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='plantdata',
            name='date',
        ),
        migrations.AddField(
            model_name='plantdata',
            name='data_date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='plantdata',
            name='seed_date',
            field=models.DateField(null=True),
        ),
    ]
