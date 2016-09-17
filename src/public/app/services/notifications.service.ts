import { Injectable } from "@angular/core";

import { SocketService } from "./socket.service";
import { INotification } from "../models/notification.model";


@Injectable()
export class NotificationsService {
    private notifications: Array<INotification>;

    /**
     * Constructor.
     *
     * @class ServicesService
     * @constructor
     */
    constructor(socketService:SocketService) {
        console.log('constructor socketService');
        let thiis = this;
        socketService.socket.on('notifications', function (notifications) {
            thiis.notifications = notifications;
        });

        socketService.socket.on('connect', function () {
            console.log('connected services');
            socketService.socket.emit('get-notifications');
        });
    }

    public list() : Array<INotification> {
        return this.notifications;
    }
}
