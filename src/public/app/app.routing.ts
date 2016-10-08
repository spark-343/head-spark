import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationsComponent }  from './components/integrations/integrations.component';
import { DevicesComponent }  from './components/devices/devices.component';
import { RulesComponent }  from './components/rules/rules.component';
import { SignComponent }  from './components/sign/sign.component';

const appRoutes: Routes = [
    {
        path: 'integrations',
        component: IntegrationsComponent
    },
    {
        path: 'rules',
        component: RulesComponent
    },
    {
        path: 'devices',
        component: DevicesComponent
    },
    {
        path: 'sign',
        component: SignComponent
    },
    {
        path: '',
        redirectTo: '/devices',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
