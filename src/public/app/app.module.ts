import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { ServicesComponent }  from './components/services/services.component';
import { NotificationsComponent }  from './components/notifications/notifications.component';

// import { ServicesComponent, NotificationsComponent }  from './components';


import { SocketService } from "./services/socket.service";
import { ServicesService } from "./services/services.service";



@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, ServicesComponent, NotificationsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ SocketService, ServicesService ]
})
export class AppModule { }
