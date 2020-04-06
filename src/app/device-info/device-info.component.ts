import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss']
})
export class DeviceInfoComponent implements OnInit {

  deviceDetails: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  populate() {
    let device = (window as any).device;
    this.deviceDetails = '';
    this.deviceDetails += '<br/>cordova: ' + device.cordova;
    this.deviceDetails += '<br/>model: ' + device.model;
    this.deviceDetails += '<br/>platform: ' + device.platform;
    this.deviceDetails += '<br/>uuid: ' + device.uuid;
    this.deviceDetails += '<br/>version: ' + device.version;
    this.deviceDetails += '<br/>manufacturer: ' + device.manufacturer;
    this.deviceDetails += '<br/>isVirtual: ' + device.isVirtual;
    this.deviceDetails += '<br/>serial: ' + device.serial;
    this.deviceDetails += '<br/>available: ' + device.available;
  }

}
