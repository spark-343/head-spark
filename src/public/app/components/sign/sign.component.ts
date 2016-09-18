import { Component, OnInit } from '@angular/core';

declare var require;
// const styles: string = require("./services.component.min.css");
// const template: string = require("./services.component.html");

@Component({
  selector: 'sign',
  // styles: [styles],
  // template: template
  templateUrl: 'components/sign/sign.component.html',
  styleUrls: ['components/sign/sign.component.min.css']
})
export class SignComponent implements OnInit {


    constructor() {
    }

    ngOnInit(): void {

    }

}
