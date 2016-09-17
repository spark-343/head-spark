import { Component } from '@angular/core';

import { ServicesService } from "../../services/services.service";
import { NotificationsService } from "../../services/notifications.service";


@Component({
  selector: 'rules',
  templateUrl: 'components/rules/rules.component.html',
  styleUrls: ['components/rules/rules.component.min.css']
})
export class RulesComponent {

    public formDisplayed: Boolean;
    ruleName: String;
    ruleNameInputFocused: Boolean;
    input: String;
    private services: ServicesService;
    private notifications: NotificationsService;

    ifCondition: String;
    ifConditionDisplayed: Boolean;

    thenCondition: String;
    thenConditionDisplayed: Boolean;


    constructor(private servicesService: ServicesService, private notificationsService: NotificationsService) {
        this.services = servicesService;
        this.notifications = notificationsService;
        this.formDisplayed = false;
        this.ruleName = '';
        this.input = '';
    }


    toggleAddRule () {
        console.log('toggle', this.ruleName);
        this.formDisplayed = ! this.formDisplayed;
    }

    cancelAddRule () {
        this.formDisplayed = false;
        this.ruleName = '';
    }

}
