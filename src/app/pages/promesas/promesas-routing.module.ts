import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromesasComponent } from './promesas.component';

const routes: Routes = [
  {
    path: '',
    component: PromesasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromesasRoutingModule {}
