import { Injectable } from "@angular/core";

import { SocketService } from "./socket.service";
import { IIntegration } from "../models/integration.model";


@Injectable()
export class IntegrationsService {
    private integrations: Array<IIntegration>;

    /**
     * Constructor.
     *
     * @class ServicesService
     * @constructor
     */
    constructor(socketService:SocketService) {
        console.log('constructor socketService');
        let thiis = this;
        socketService.socket.on('services', function (integrations) {
            console.log('on.services');
            thiis.integrations = integrations;
        });

        socketService.socket.on('connect', function () {
            console.log('connected services');
            socketService.socket.emit('get-services');
        });
    }

    public list() : Array<IIntegration> {
        return this.integrations;
    }
}
