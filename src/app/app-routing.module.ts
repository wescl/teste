import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { HomeENComponent } from './en/home-en/home-en.component';
import { HomeESComponent } from './es/home-es/home-es.component';
import { GgridComponent } from './projeto/ggrid/ggrid.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ggrid',
    component: GgridComponent
  },
  {
    path: 'en',
    component: HomeENComponent
  },
  {
    path: 'es',
    component: HomeESComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
