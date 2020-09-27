import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginDashboardComponent } from './login-dashboard.component';
import { LoginDashboardRoutingModule } from './login-dashboard-routing.module';

@NgModule({
  declarations: [LoginDashboardComponent],

  imports: [
    CommonModule,
    LoginDashboardRoutingModule,
    FormsModule
  ]
  
})
export class LoginDashboardModule { }