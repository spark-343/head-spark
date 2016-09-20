import { Component, OnInit } from '@angular/core';

import { NotificationsService } from "../../services/notifications.service";
import { BrowserNotificationService } from "../../services/browser-notification.service";

declare var require: any

@Component({
  selector: 'notifications',
  template: require('./notifications.component.html'),
  styles: [require('./notifications.component.less')]
})
export class NotificationsComponent implements OnInit  {

    private notifications: NotificationsService;
    private browserNotification: BrowserNotificationService;

    constructor(private notificationsService: NotificationsService, private browserNotificationService:BrowserNotificationService ) {
        this.notifications = notificationsService;
        this.browserNotification = browserNotificationService;
    }

    ngOnInit(): void {

    }

}
