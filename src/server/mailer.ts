import * as mailgun from "mailgun-js";
import * as dotenv from "dotenv";

declare var process, __dirname;

/**
 * The server.
 *
 * @class Server
 */
export class Mailer {

    private apiKey: String;
    private domainName: String;

    private sender: any;

    /**
    * Constructor.
    *
    * @class Mailer
    * @constructor
    */
    constructor() {

        this.config();

        this.sender = mailgun({
            apiKey: this.apiKey,
            domain: this.domainName
        });
    }

    public send(email: String, subject: String, messageText: String, messageHtml: String, callback: (error) => void): void {
        var data = {
            from: 'Home-spark <mailgun@sandbox0bcfc37887b449f7893a0ea85908f3cb.mailgun.org>',
            to: email,
            subject: subject,
            text: messageText,
            html: messageHtml
        };

        this.sender.messages().send(data, function (error, body) {
            console.log('sender callback');
            callback && callback(error);
            /*if (error) {
                console.log(error);
            } else {
                console.log('sent');
            }*/

            //console.log(body);
        });
    }

    /**
     * Configuration
     *
     * @class Server
     * @method config
     * @return void
     */
    private config(): void {
        // Read .env file (local development)
        dotenv.config();

        // By default the port should be 5000
        this.apiKey = process.env.MAILGUN_KEY;

        this.domainName = process.env.MAILGUN_DOMAIN;
    }

}
