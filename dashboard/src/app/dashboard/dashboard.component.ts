import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface IO {
  id: string;
  state: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  on_color = '#00FF00';
  off_color = '#D3D3D3';
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
  teach_mode: string = 'playback';
  operation_mode: string = 'auto';
  manual_program_num?: number;
  program_sequence = { start: '0', number: '' };
  camera_timestamp: string = '11:52:12';

  constructor(public infoDialog: MatDialog) {}

  ngOnInit(): void {}

  onOperationChange(mode: string) {
    this.operation_mode = mode;
    console.log('OPERATION MODE: ', mode);
  }

  manualProgramSelect() {
    console.log('MANUAL PROGRAM SELECT: ', this.manual_program_num);
  }

  autoOperation() {
    console.log('AUTOMATIC OPERATION');
  }

  emergencyStop() {
    console.log('STOPPP');
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
