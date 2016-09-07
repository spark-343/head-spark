import { Component } from '@angular/core';
@Component({
  selector: 'notifications',
  templateUrl: 'components/notifications/notifications.component.html',
  styleUrls: ['components/notifications/notifications.component.min.css']
})
export class NotificationsComponent {

    public addNotification: Boolean;
    notificationName: String;

    constructor() {
        this.addNotification = false;
        this.notificationName = '';
    }


    toggleAddNotification () {
        console.log('toggle');
        this.addNotification = ! this.addNotification;
    }

    hideButtonAddNotification () {
        return this.addNotification;
    }

}
