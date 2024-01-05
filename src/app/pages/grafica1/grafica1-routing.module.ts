import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grafica1Component } from './grafica1.component';

const routes: Routes = [
  {
    path: '',
    component: Grafica1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Grafica1RoutingModule {}
