from django.db import models

class Temperature(models.Model):
    temperature = models.FloatField(null=True,
                                    blank=True,
                                    default=None)
    time = models.DateTimeField()

    def __str__(self):
        return 'temperature'

    class Meta:
        verbose_name_plural = 'temperature'
