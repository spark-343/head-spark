import { Component, OnInit } from '@angular/core';

import { SocketService } from "./services/socket.service";
import { ServicesService } from "./services/services.service";
import { NotificationsService } from "./services/notifications.service";
import { BrowserNotificationService } from "./services/browser-notification.service";


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ SocketService, ServicesService, NotificationsService, BrowserNotificationService ]
})
export class AppComponent implements OnInit {

    private browserNotification: BrowserNotificationService;

    constructor(private servicesService: ServicesService, private notificationsService: NotificationsService, private browserNotificationService:BrowserNotificationService ) {
        this.browserNotification = browserNotificationService;
    }

    ngOnInit(): void {

    }

}
