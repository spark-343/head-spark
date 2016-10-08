import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent }  from './components/app/app.component';
import { IntegrationsComponent }  from './components/integrations/integrations.component';
import { DevicesComponent }  from './components/devices/devices.component';
import { RulesComponent }  from './components/rules/rules.component';
import { SignComponent }  from './components/sign/sign.component';


// import { ServicesComponent, NotificationsComponent }  from './components';

import { FocusDirective } from './directives/focus.directive';
import { DropdownDirective } from './directives/dropdown.directive';


import { SocketService } from "./services/socket.service";
import { IntegrationsService } from "./services/integrations.service";
import { NotificationsService } from "./services/notifications.service";
import { BrowserNotificationService } from "./services/browser-notification.service";



@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,
      IntegrationsComponent,
      DevicesComponent,
      FocusDirective,
      DropdownDirective,
      RulesComponent,
      SignComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ SocketService, IntegrationsService, NotificationsService, BrowserNotificationService ]
})
export class AppModule { }
