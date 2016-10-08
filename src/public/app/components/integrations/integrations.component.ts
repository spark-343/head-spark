import { Component, OnInit } from '@angular/core';

import { IntegrationsService } from "../../services/integrations.service";

declare var require;
// const styles: string = require("./services.component.min.css");
// const template: string = require("./services.component.html");

@Component({
  selector: 'services',
  // styles: [styles],
  // template: template
  template: require('./integrations.component.html'),
  styles: [ require('./integrations.component.less')]
})
export class IntegrationsComponent implements OnInit {

    private integrations: IntegrationsService;

    constructor(private integrationsService: IntegrationsService) {
        this.integrations = integrationsService;
        console.log(this.integrations);
    }

    ngOnInit(): void {

    }

}
