from django.db import models

class PlantData(models.Model):
    aruco_id = models.IntegerField(blank=False, null=False, default=-1)
    image_url = models.CharField(max_length=100, null=True)
    type = models.CharField(max_length=25, null=True)
    growth_rate = models.FloatField(null=True,
                              blank=True,
                              default=None)
    seed_date = models.DateField(null=True)
    data_date = models.DateField(null=True)
    status = models.CharField(max_length=100, null=True)

    def __str__(self):
        return str(self.image_url)

    class Meta:
        verbose_name_plural = 'PlantData'
