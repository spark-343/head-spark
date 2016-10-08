import { Component, OnInit } from '@angular/core';

import { SocketService } from "./../../services/socket.service";
import { IntegrationsService } from "./../../services/integrations.service";
import { NotificationsService } from "./../../services/notifications.service";
import { BrowserNotificationService } from "./../../services/browser-notification.service";

declare var require: any

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  providers: [ SocketService, IntegrationsService, NotificationsService, BrowserNotificationService ]
})
export class AppComponent implements OnInit {

    private browserNotification: BrowserNotificationService;

    constructor(private integrationsService: IntegrationsService, private notificationsService: NotificationsService, private browserNotificationService:BrowserNotificationService ) {
        this.browserNotification = browserNotificationService;
    }

    ngOnInit(): void {

    }

}
