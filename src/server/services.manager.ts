import {IService} from "../public/app/models/service.model";
import * as dotenv from "dotenv";


declare var process, __dirname;

/**
 * The server.
 *
 * @class Server
 */
export class ServicesManager {

    public constructor() {
    }

    public currentServices(): Array<IService> {
        var services = [];
        if (process.env.SLACK_API_TOKEN) {
            console.log('in slack', process, process.env.SLACK_API_TOKEN);
            services.push({
                id: 'slack',
                icon: 'slack',
                name: 'Slack',
                notification: 'a slack message',
                description: 'Get notifications for channel messages and private messages'
            });
        }

        if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.EMAIL_HOST) {
            services.push({
                id: 'email',
                icon: 'mail',
                name: 'Email',
                notification: 'an email',
                description: 'Get notifications for mail you receive'
            });
        }

        return services;
    }

}
