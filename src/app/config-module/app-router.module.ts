import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guard/auth-guard.service';

import { HomeComponent } from '../page/home/home.component';
import { TemplateComponent } from '../page/template/template.component';
import { RegisterComponent } from '../page/register/register.component';
import { ProfileComponent } from '../page/profile/profile.component';
import { PageNotFoundComponent } from '../page/page-not-found/page-not-found.component';
import { LoginComponent } from '../page/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    {
        path: 'app',
        component: TemplateComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'profile', component: ProfileComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '*', component: PageNotFoundComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }