import paho.mqtt.client as mqtt
from django.conf import settings
from .models import Robot, RobotLog

def on_message_mqtt(input_name):
    def template(client, userdata, msg):
        temp = Robot.objects.get(name=input_name)
        temp.value = msg.payload.decode('utf-8')
        temp.save()
        temp_log = RobotLog(name=temp, value=msg.payload.decode('utf-8'))
        temp_log.save()
        print('Received a new data: ', msg.payload.decode('utf-8'))  
    return template

def on_connect(client, userdata, rc, result):
    client.subscribe('robot/#')

on_message_running_stage = on_message_mqtt('RunningStage')
on_message_program_num = on_message_mqtt('ProgramNumber')
on_message_playback_mode = on_message_mqtt('PlaybackMode')
on_message_io = on_message_mqtt('RobotIO')
on_message_camera = on_message_mqtt('CameraFeed')

client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION1)

client.message_callback_add('robot/running_stage', on_message_running_stage)
client.message_callback_add('robot/program_num', on_message_program_num)
client.message_callback_add('robot/playback_mode', on_message_playback_mode)
client.message_callback_add('robot/io', on_message_io)
client.message_callback_add('robot/camera', on_message_camera)

client.on_connect = on_connect
client.connect(settings.MQTT_SERVER, settings.MQTT_PORT)

# mosquitto -c Documents/CIT/axmv6-dashboard/mosquitto.conf