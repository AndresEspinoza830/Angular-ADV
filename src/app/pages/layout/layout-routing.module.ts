import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        data: { titulo: 'Dashboard' },
      },
      {
        path: 'progress',
        loadChildren: () =>
          import('../progress/progress.module').then((m) => m.ProgressModule),
        data: { titulo: 'ProgressBar' },
      },

      {
        path: 'grafica1',
        loadChildren: () =>
          import('../grafica1/grafica1.module').then((m) => m.Grafica1Module),
        data: { titulo: 'Grafica #1' },
      },
      {
        path: 'account-settings',
        loadChildren: () =>
          import('../account-settings/account-settings.module').then(
            (m) => m.AccountSettingsModule
          ),
        data: { titulo: 'Ajustes de Cuenta' },
      },
      {
        path: 'promesas',
        loadChildren: () =>
          import('../promesas/promesas.module').then((m) => m.PromesasModule),
        data: { titulo: 'Promesas' },
      },
      {
        path: 'rxjs',
        loadChildren: () =>
          import('../rxjs/rxjs.module').then((m) => m.RxjsModule),
        data: { titulo: 'RXJS' },
      },
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
