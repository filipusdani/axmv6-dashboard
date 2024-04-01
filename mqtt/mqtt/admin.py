from django.contrib import admin

from .models import Robot, RobotLog

@admin.register(Robot)
class RobotAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "value")
    
@admin.register(RobotLog)
class RobotLogAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "value", "time")