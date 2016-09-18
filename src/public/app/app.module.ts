import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { ServicesComponent }  from './components/services/services.component';
import { NotificationsComponent }  from './components/notifications/notifications.component';
import { RulesComponent }  from './components/rules/rules.component';
import { SignComponent }  from './components/sign/sign.component';


// import { ServicesComponent, NotificationsComponent }  from './components';

import { FocusDirective } from './directives/focus.directive';
import { DropdownDirective } from './directives/dropdown.directive';


import { SocketService } from "./services/socket.service";
import { ServicesService } from "./services/services.service";
import { NotificationsService } from "./services/notifications.service";
import { BrowserNotificationService } from "./services/browser-notification.service";



@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,
      ServicesComponent,
      NotificationsComponent,
      FocusDirective,
      DropdownDirective,
      RulesComponent,
      SignComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ SocketService, ServicesService, NotificationsService, BrowserNotificationService ]
})
export class AppModule { }
