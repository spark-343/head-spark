import {IIntegration} from "../public/app/models/integration.model";
import * as dotenv from "dotenv";


declare var process, __dirname;

/**
 * The server.
 *
 * @class Server
 */
export class DevicesManager {

    public constructor() {
    }

    public currentDevices(): Array<IIntegration> {
        var devices = [];

        devices.push({
            id: 'browser',
            icon: 'browser',
            name: 'Browser',
            notification: 'a browser notification',
            description: 'Get a notification in the browser (for debug only)'
        })

        return devices;
    }

}
