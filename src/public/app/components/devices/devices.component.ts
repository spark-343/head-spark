import { Component, OnInit } from '@angular/core';

import { NotificationsService } from "../../services/notifications.service";
import { BrowserNotificationService } from "../../services/browser-notification.service";

declare var require: any

@Component({
  selector: 'devices',
  template: require('./devices.component.html'),
  styles: [require('./devices.component.less')]
})
export class DevicesComponent implements OnInit  {

    private notifications: NotificationsService;
    private browserNotification: BrowserNotificationService;

    constructor(private notificationsService: NotificationsService, private browserNotificationService:BrowserNotificationService ) {
        this.notifications = notificationsService;
        this.browserNotification = browserNotificationService;
    }

    ngOnInit(): void {

    }

}