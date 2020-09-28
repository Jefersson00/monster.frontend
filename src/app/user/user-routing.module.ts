import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../home/home-layout/home-layout.component';
import { AnnuncioComponent } from './annuncio/annuncio.component';


const routes: Routes = [
  {
    path: 'home-dashboard', component: HomeLayoutComponent, children: [
        
      { path: 'annuncios', component: AnnuncioComponent },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }