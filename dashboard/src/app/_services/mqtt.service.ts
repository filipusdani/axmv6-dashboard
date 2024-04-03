import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';

@Injectable({
  providedIn: 'root',
})
export class MqttClientService {

  constructor(private _mqttService: MqttService) {}

  subscribeTopic(topic: string): Observable<IMqttMessage> {
    return this._mqttService
      .observe(topic)
  }

  sendmsg(topic: string, msg: string): void {
    this._mqttService.unsafePublish(topic, msg, {
      qos: 1,
      retain: true,
    });
  }
}
