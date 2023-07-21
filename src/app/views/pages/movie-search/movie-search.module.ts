import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MovieSearchComponent } from './movie-search.component';

export const appRoutes: Routes = [
  { path: '', component: MovieSearchComponent, title: 'Movie Search Page' },
  { path: 'movie-search', component: MovieSearchComponent, title: 'Movie Search Page' },
];

@NgModule({
  declarations: [MovieSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule,
  ],
})
export class MovieSearchModule {}
