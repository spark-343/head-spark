import { Component, OnInit } from '@angular/core';

import { ServicesService } from "../../services/services.service";

declare var require;
// const styles: string = require("./services.component.min.css");
// const template: string = require("./services.component.html");

@Component({
  selector: 'services',
  // styles: [styles],
  // template: template
  template: require('./services.component.html'),
  styles: [ require('./services.component.less')]
})
export class ServicesComponent implements OnInit {

    private services: ServicesService;

    constructor(private servicesService: ServicesService) {
        this.services = servicesService;
        console.log(this.services);
    }

    ngOnInit(): void {

    }

}
