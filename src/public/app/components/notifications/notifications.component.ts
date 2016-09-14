import { Component } from '@angular/core';

import { ServicesService } from "../../services/services.service";


@Component({
  selector: 'notifications',
  templateUrl: 'components/notifications/notifications.component.html',
  styleUrls: ['components/notifications/notifications.component.min.css']
})
export class NotificationsComponent {

    public formDisplayed: Boolean;
    notificationName: String;
    notificationNameInputFocused: Boolean;
    input: String;
    private services: ServicesService;

    ifCondition: String;
    ifConditionDisplayed: Boolean;


    constructor(private servicesService: ServicesService) {
        this.services = servicesService;
        this.formDisplayed = false;
        this.notificationName = '';
        this.input = '';
    }


    toggleAddNotification () {
        console.log('toggle', this.notificationName);
        this.formDisplayed = ! this.formDisplayed;
    }

    cancelAddNotification () {
        this.formDisplayed = false;
        this.notificationName = '';
    }

    cancelAddConditionIfNotification () {
        this.ifConditionDisplayed = false;
    }

}
