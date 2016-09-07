import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent }  from './components/services/services.component';
import { NotificationsComponent }  from './components/notifications/notifications.component';

const appRoutes: Routes = [
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: '',
        redirectTo: '/notifications',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
