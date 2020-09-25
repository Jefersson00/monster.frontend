import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarHomeComponent } from './toolbar-home/toolbar-home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarLoginComponent } from './toolbar-login/toolbar-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarLoginComponent,
    FormLoginComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
