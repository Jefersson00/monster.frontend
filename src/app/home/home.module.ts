import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [FooterComponent, HomeLayoutComponent, ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
