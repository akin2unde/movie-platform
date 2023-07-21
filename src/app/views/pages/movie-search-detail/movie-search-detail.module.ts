import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MovieSearchDetailComponent } from './movie-search-detail.component';

export const appRoutes: Routes = [
  { path: '', component: MovieSearchDetailComponent, title: 'Movie Search Detail Page' },
  { path: 'movie-search-detail', component: MovieSearchDetailComponent, title: 'Movie Search Detail Page' },
];

@NgModule({
  declarations: [MovieSearchDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule,
  ],
})
export class MovieSearchDetailModule {}
