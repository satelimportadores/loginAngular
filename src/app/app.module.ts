import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginInComponent } from './login-in/login-in.component';
import { LoginOutComponent } from './login-out/login-out.component';

const routes: Route[]=[
  {path: '',component: LoginComponent},
  {path: 'loginIn',component: LoginInComponent},
  {path: 'loginOut',component: LoginOutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginInComponent,
    LoginOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
