from django.db import models

class Robot(models.Model):
    name = models.CharField(max_length=200)
    value = models.CharField(max_length=200)
    
class RobotLog(models.Model):
    name = models.ForeignKey('Robot', models.DO_NOTHING, db_column='name')
    value = models.CharField(max_length=200)
    time = models.DateTimeField(auto_now_add=True)