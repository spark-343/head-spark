import { Component, OnInit } from '@angular/core';

import { SocketService } from "./services/socket.service";
import { ServicesService } from "./services/services.service";


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ SocketService, ServicesService ]
})
export class AppComponent implements OnInit {

    constructor(private servicesService: ServicesService) { }

    ngOnInit(): void {

    }

}
