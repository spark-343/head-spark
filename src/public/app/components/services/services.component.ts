import { Component, OnInit } from '@angular/core';

import { ServicesService } from "../../services/services.service";

declare var require;
// const styles: string = require("./services.component.min.css");
// const template: string = require("./services.component.html");

@Component({
  selector: 'services',
  // styles: [styles],
  // template: template
  templateUrl: 'components/services/services.component.html',
  styleUrls: ['components/services/services.component.min.css']
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
