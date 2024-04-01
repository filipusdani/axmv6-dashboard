from django.shortcuts import render
from django.views.generic import View
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Robot, RobotLog
from django.shortcuts import get_object_or_404



class RobotTemplateView(APIView):
    robot_name = ""
    def get(self, request, format=None):
        res = get_object_or_404(Robot, name=self.robot_name)
        raw_data = reversed(RobotLog.objects.filter(name__name__exact=self.robot_name).order_by('-id')[:100])
        time_data = []
        log_data = []
        for log in raw_data:
            time_data.append(log.time.strftime("%x %X"))
            log_data.append(log.value)
        data = {
            "value": res.value,
            "time_data": time_data,
            "chart_data": log_data,
        }
        return Response(data)
    
class RunningStageView(RobotTemplateView):
    robot_name = "RunningStage"

class ProgramNumView(RobotTemplateView):
    robot_name = "ProgramNumber"

class PlaybackModeView(RobotTemplateView):
    robot_name = "PlaybackMode"

class IoView(RobotTemplateView):
    robot_name = "RobotIO"
    
class CameraView(RobotTemplateView):
    robot_name = "CameraFeed"
