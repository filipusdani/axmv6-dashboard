import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MqttClientService } from '../_services/mqtt.service';
import { IMqttMessage } from 'ngx-mqtt';
import { DomSanitizer } from '@angular/platform-browser';

export interface IO {
  id: string;
  state: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  on_color = '#FF4C4C';
  off_color = '#363A45';

  io_board: IO[] = [
    { id: '1', state: '0' },
    { id: '2', state: '0' },
    { id: '3', state: '0' },
    { id: '4', state: '0' },
    { id: '5', state: '0' },
    { id: '6', state: '0' },
    { id: '7', state: '0' },
    { id: '8', state: '0' },
    { id: '9', state: '0' },
    { id: '10', state: '0' },
    { id: '11', state: '0' },
    { id: '12', state: '0' },
    { id: '13', state: '0' },
    { id: '14', state: '0' },
    { id: '15', state: '0' },
    { id: '16', state: '0' },
  ];
  robot_activated: string = '1';
  teach_mode: string = '';
  operation_mode: string = 'manual';
  manual_program_num?: number;
  program_sequence = { start: '0', number: '' };

  mqtt_teach?: any;
  mqtt_sequence?: any;
  mqtt_io_1?: any;
  mqtt_io_2?: any;
  mqtt_io_3?: any;
  mqtt_io_4?: any;
  mqtt_io_5?: any;
  mqtt_io_6?: any;
  mqtt_io_7?: any;
  mqtt_io_8?: any;
  mqtt_io_9?: any;
  mqtt_io_10?: any;
  mqtt_io_11?: any;
  mqtt_io_12?: any;
  mqtt_io_13?: any;
  mqtt_io_14?: any;
  mqtt_io_15?: any;
  mqtt_io_16?: any;
  mqtt_robot_activated?: any;
  mqtt_camera?: any;
  feed?: any;

  constructor(
    public infoDialog: MatDialog,
    private mqttService: MqttClientService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.mqtt_teach = this.mqttService
      .subscribeTopic('robot/teach_mode')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        console.log('Message: ', msg, payload);
        this.teach_mode = payload;
      });
    this.mqtt_teach = this.mqttService
      .subscribeTopic('robot/activated')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        console.log('Message: ', msg, payload);
        this.robot_activated = payload;
      });
    this.mqtt_sequence = this.mqttService
      .subscribeTopic('robot/running')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        console.log('Message: ', msg, JSON.parse(payload));
        this.program_sequence = JSON.parse(payload);
      });
    this.mqtt_io_1 = this.mqttService
      .subscribeTopic('robot/io/1')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[0].state = payload;
      });
    this.mqtt_io_2 = this.mqttService
      .subscribeTopic('robot/io/2')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[1].state = payload;
      });
    this.mqtt_io_3 = this.mqttService
      .subscribeTopic('robot/io/3')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[2].state = payload;
      });
    this.mqtt_io_4 = this.mqttService
      .subscribeTopic('robot/io/4')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[3].state = payload;
      });
    this.mqtt_io_5 = this.mqttService
      .subscribeTopic('robot/io/5')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[4].state = payload;
      });
    this.mqtt_io_6 = this.mqttService
      .subscribeTopic('robot/io/6')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[5].state = payload;
      });
    this.mqtt_io_7 = this.mqttService
      .subscribeTopic('robot/io/7')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[6].state = payload;
      });
    this.mqtt_io_8 = this.mqttService
      .subscribeTopic('robot/io/8')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[7].state = payload;
      });
    this.mqtt_io_9 = this.mqttService
      .subscribeTopic('robot/io/9')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[8].state = payload;
      });
    this.mqtt_io_10 = this.mqttService
      .subscribeTopic('robot/io/10')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[9].state = payload;
      });
    this.mqtt_io_11 = this.mqttService
      .subscribeTopic('robot/io/11')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[10].state = payload;
      });
    this.mqtt_io_12 = this.mqttService
      .subscribeTopic('robot/io/12')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[11].state = payload;
      });
    this.mqtt_io_13 = this.mqttService
      .subscribeTopic('robot/io/13')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[12].state = payload;
      });
    this.mqtt_io_14 = this.mqttService
      .subscribeTopic('robot/io/14')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[13].state = payload;
      });
    this.mqtt_io_15 = this.mqttService
      .subscribeTopic('robot/io/15')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[14].state = payload;
      });
    this.mqtt_io_16 = this.mqttService
      .subscribeTopic('robot/io/16')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        // console.log('Message: ', msg, payload);
        this.io_board[15].state = payload;
      });
    this.mqtt_camera = this.mqttService
      .subscribeTopic('robot/image')
      .subscribe((msg: IMqttMessage) => {
        const payload = msg.payload.toString();
        console.log('Message: ', msg, payload);
        let objectURL = 'data:image/jpeg;base64,' + payload;
        this.feed = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
  }

  ngOnDestroy(): void {
    this.mqtt_teach.unsubscribe();
    this.mqtt_sequence.unsubscribe();
    this.mqtt_teach.unsubscribe();
  }

  onOperationChange(mode: string) {
    this.operation_mode = mode;
    this.mqttService.sendmsg(
      'robot/operation_mode',
      String(this.operation_mode)
    );
    console.log('OPERATION MODE: ', mode);
  }

  operationManual() {
    this.mqttService.sendmsg('robot/operation_manual', '0');
    this.mqttService.sendmsg(
      'robot/operation_manual',
      String(this.manual_program_num)
    );
    console.log('MANUAL PROGRAM SELECT: ', this.manual_program_num);
  }

  operationAuto(state: string) {
    this.mqttService.sendmsg('robot/operation_auto', state);
    console.log('AUTOMATIC OPERATION', state);
  }

  emergencyStop() {
    this.mqttService.sendmsg('robot/emergency', 'stop');
    this.mqttService.sendmsg('robot/emergency', '0');
    console.log('EMERGENCY STOP');
  }

  showInfo() {
    const dialogRef = this.infoDialog.open(InfoDialog);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'info-dialog',
  templateUrl: './info-dialog.html',
  standalone: true,
})
export class InfoDialog {}
