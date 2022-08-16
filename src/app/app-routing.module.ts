import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { NotFoundComponent } from '@sharedC/not-found/not-found.component';

const authenticationRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        m => m.AuthenticationModule
      ),
    canActivate: [],
  },
  {
    path: 'plans',
    loadChildren: () =>
      import('./features/plans/plans.module').then(m => m.PlansModule),
  },
  {
    path: 'bills',
    loadChildren: () =>
      import('./features/bills/bills.module').then(m => m.BillsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(authenticationRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
