import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';


import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AppareilDetailComponent } from './appareil-detail/appareil-detail.component';
import { AuthGuard } from './services/authguard.service';
import { AppareilEditComponent } from './appareil-edit/appareil-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserService } from './services/user.service';
import { UserEditComponent } from './user-edit/user-edit.component';


const appRoutes : Routes = [
 { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
 { path: 'users', canActivate: [AuthGuard], component: UserViewComponent },
 { path: 'appareils/:id', canActivate: [AuthGuard], component: AppareilDetailComponent },
 { path: 'edit', canActivate: [AuthGuard], component: AppareilEditComponent },
 { path: 'useredit', canActivate: [AuthGuard], component: UserEditComponent },
 { path: 'auth',  component: AuthComponent },
 { path: '',  component: AppareilViewComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    AppareilDetailComponent,
    AppareilEditComponent,
    UserViewComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    // Mise en place des routes (1:21:00)
    RouterModule.forRoot (appRoutes)   
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
