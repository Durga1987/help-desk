import { Routes, RouterModule } from '@angular/router';

import { HomeComponent,LoginComponent } from  "./_components";
 
import { AuthGuard } from "./_helper";

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);