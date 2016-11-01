import {IIntegration} from "../public/app/models/integration.model";
import * as dotenv from "dotenv";


declare var process, __dirname;

/**
 * The server.
 *
 * @class Server
 */
export class IntegrationsManager {

    public constructor() {
        dotenv.config();
    }

    public currentServices(): Array<IIntegration> {
        var integrations = [];
        if (process.env.SLACK_API_TOKEN) {
            // console.log('in slack', process.env.SLACK_API_TOKEN);
            integrations.push({
                id: 'slack',
                icon: 'slack',
                name: 'Slack',
                notification: 'a slack message',
                description: 'Get notifications for channel messages and private messages'
            });
        }

        if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.EMAIL_HOST) {
            integrations.push({
                id: 'email',
                icon: 'mail',
                name: 'Email',
                notification: 'an email',
                description: 'Get notifications for mail you receive'
            });
        }

        return integrations;
    }

}
