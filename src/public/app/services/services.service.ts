import { Injectable } from "@angular/core";

import { SocketService } from "./socket.service";
import { IService } from "../models/service.model";


@Injectable()
export class ServicesService {
    private services: Array<IService>;

    /**
     * Constructor.
     *
     * @class ServicesService
     * @constructor
     */
    constructor(socketService:SocketService) {
        console.log('constructor socketService');
        let thiis = this;
        socketService.socket.on('services', function (services) {
            console.log('on.services');
            thiis.services = services;
        });

        socketService.socket.on('connect', function () {
            console.log('connected services');
            socketService.socket.emit('get-services');
        });
    }

    public list() : Array<IService> {
        return this.services;
    }
}
