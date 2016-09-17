import { Component, OnInit } from '@angular/core';

import { NotificationsService } from "../../services/notifications.service";
import { BrowserNotificationService } from "../../services/browser-notification.service";

@Component({
  selector: 'notifications',
  templateUrl: 'components/notifications/notifications.component.html',
  styleUrls: ['components/notifications/notifications.component.min.css']
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
