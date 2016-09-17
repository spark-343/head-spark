import { Injectable } from "@angular/core";

@Injectable()
export class BrowserNotificationService {

    private message: String;
    private icon: String;
    private show: Boolean;

    constructor() {
        this.message = '';
        this.icon = '';
        this.show = false;
    }

    showNotification(message: String) {
        this.message = message;
        this.show = true;

        let thiis = this;
        setTimeout(function () {
            thiis.show = false;
        }, 10000);
    }

    currentNotification () : any {
        return  {
            message: this.message,
            show: this.show
        };
    }
}
