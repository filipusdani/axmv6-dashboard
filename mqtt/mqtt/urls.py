from django.urls import path
from django.contrib import admin
from . import views, mqtt

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/running_stage', views.RunningStageView.as_view()),
    path('api/program_num', views.ProgramNumView.as_view()),
    path('api/playback_mode', views.PlaybackModeView.as_view()),
    path('api/io', views.IoView.as_view()),
    path('api/camera', views.CameraView.as_view()),
]
mqtt.client.loop_start()