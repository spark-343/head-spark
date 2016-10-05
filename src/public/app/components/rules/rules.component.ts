import { Component } from '@angular/core';

import { ServicesService } from "../../services/services.service";
import { NotificationsService } from "../../services/notifications.service";


declare var require: any


@Component({
  selector: 'rules',
  template: require('./rules.component.html'),
  styles: [ require('./rules.component.less')]
})
export class RulesComponent {

    createRuleStep: String;
    createRuleMaxStep: String;

    public formDisplayed: Boolean;

    integration: any;
    media: any;

    ruleName: String;
    ruleNameInputFocused: Boolean;

    private services: ServicesService;
    private notifications: NotificationsService;

    integrationCondition: String;
    integrationConditionDisplayed: Boolean;

    deviceCondition: String;
    deviceConditionDisplayed: Boolean;


    constructor(private servicesService: ServicesService, private notificationsService: NotificationsService) {
        this.services = servicesService;
        this.notifications = notificationsService;
        this.formDisplayed = false;
        this.ruleName = '';
        this.integration = null;
        this.media = null;

        this.createRuleStep = 'integration';
        this.createRuleMaxStep = 'integration';

        this.integrationCondition = '';
        this.integrationConditionDisplayed = false;

        this.deviceCondition = '';
        this.deviceConditionDisplayed = false;
    }

    nextStep () {
        if (this.createRuleStep == 'integration') {
            this.createRuleStep = 'media';
            if (this.createRuleMaxStep == 'integration') {
                this.createRuleMaxStep = 'media';
            }
        } else if (this.createRuleStep == 'media') {
            this.createRuleStep = 'name';
            if (this.createRuleMaxStep == 'media') {
                this.createRuleMaxStep = 'name';
            }
        }
    }

    gotoStep (step) {

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
