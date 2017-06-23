import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';
import { MaterialWrapModule } from './material-wrap.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AuthenService, FirebaseService } from './service';

import { AppComponent } from './app.component';

import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LoginComponent } from './page/login/login.component';

import 'hammerjs';
import 'lodash';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MaterialWrapModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouterModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthenService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
