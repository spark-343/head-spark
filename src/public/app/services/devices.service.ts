import { Injectable } from "@angular/core";

import { SocketService } from "./socket.service";
import { IDevice } from "../models/device.model";


@Injectable()
export class DevicesService {
    private devices: Array<IDevice>;

    /**
     * Constructor.
     *
     * @class ServicesService
     * @constructor
     */
    constructor(socketService:SocketService) {
        console.log('constructor socketService');
        let thiis = this;
        socketService.socket.on('devices', function (devices) {
            thiis.devices = devices;
        });

        socketService.socket.on('connect', function () {
            console.log('connected devices');
            socketService.socket.emit('get-devices');
        });
    }

    public list() : Array<IDevice> {
        return this.devices;
    }
}
