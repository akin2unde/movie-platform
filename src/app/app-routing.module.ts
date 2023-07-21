import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('../app/views/stand-alone/login/login.moule').then((m) => m.LoginModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./core/mainpage/mainpage.module').then(
        (m) => m.MainpageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
