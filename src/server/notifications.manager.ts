import {INotification} from "../public/app/models/notification.model";
import * as dotenv from "dotenv";


declare var process, __dirname;

/**
 * The server.
 *
 * @class Server
 */
export class NotificationsManager {

    public constructor() {
    }

    public currentNotifications(): Array<INotification> {
        var notifications = [];

        notifications.push({
            id: 'browser',
            icon: 'browser',
            name: 'Browser',
            notification: 'a browser notification',
            description: 'Get a notification in the browser (for debug only)'
        })

        return notifications;
    }

}
