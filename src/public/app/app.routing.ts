import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent }  from './components/services/services.component';
import { NotificationsComponent }  from './components/notifications/notifications.component';
import { RulesComponent }  from './components/rules/rules.component';
import { SignComponent }  from './components/sign/sign.component';

const appRoutes: Routes = [
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'rules',
        component: RulesComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'sign',
        component: SignComponent
    },
    {
        path: '',
        redirectTo: '/notifications',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
