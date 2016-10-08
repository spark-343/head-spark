import { Component, OnInit } from '@angular/core';

import { DevicesService } from "../../services/devices.service";
import { BrowserNotificationService } from "../../services/browser-notification.service";

declare var require: any

@Component({
  selector: 'devices',
  template: require('./devices.component.html'),
  styles: [require('./devices.component.less')]
})
export class DevicesComponent implements OnInit  {

    private devices: DevicesService;
    private browserNotification: BrowserNotificationService;

    constructor(private devicesService: DevicesService, private browserNotificationService:BrowserNotificationService ) {
        this.devices = devicesService;
        this.browserNotification = browserNotificationService;
    }

    ngOnInit(): void {

    }

}
