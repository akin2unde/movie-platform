import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/authGuard';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BlockUIModule } from 'primeng/blockui';
import { MovieSearchComponent } from 'src/app/views/pages/movie-search/movie-search.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [
    { path: '', component: MovieSearchComponent,},
    {
        path: 'movie-search',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('../../views/pages/movie-search/movie-search.module').then(
            (m) => m.MovieSearchModule
          ),
    },
    {
      path: 'movie-search-detail',
      // canActivate: [AuthGuard],
      loadChildren: () =>
        import('../../views/pages/movie-search-detail/movie-search-detail.module').then(
          (m) => m.MovieSearchDetailModule
        ),
    },
    ],
  },
];
@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    // SidebarModule,
    // TopbarModule,
    ToastModule,
    ConfirmDialogModule,
    CommonModule,
    BlockUIModule
  ],
  exports:[RouterModule]
})
export class MainpageModule { }
