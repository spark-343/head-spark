import { Component, OnInit } from '@angular/core';

import { UserService } from "../../services/user.service";

declare var require;
// const styles: string = require("./services.component.min.css");
// const template: string = require("./services.component.html");

@Component({
  selector: 'sign',
  // styles: [styles],
  // template: template
  template: require('./sign.component.html'),
  styles: [ require('./sign.component.less')]
})
export class SignComponent implements OnInit {

    step: String;
    emailAddress: String;
    user: UserService;
    error: String;

    constructor(userService: UserService) {

        this.emailAddress = '';
        this.step = 'sign';
        this.user = userService;
        this.error = '';
    }

    ngOnInit(): void {

    }

    send(): void {
        this.user.sign(this.emailAddress, function (err) {
            console.log('callback');
            if (err) {
                this.step = 'error';
                console.log(err);
                this.error = err;
            } else {
                this.step = 'sent';
            }
        });
    }

}
