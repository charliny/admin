import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  }
  // {
  //   path: 'auth',
  //   component: AuthComponent,
  //   loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
