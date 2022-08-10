import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'obligations',
    loadChildren: () =>
      import('./obligations/obligations.module').then(m => m.ObligationsModule),
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
