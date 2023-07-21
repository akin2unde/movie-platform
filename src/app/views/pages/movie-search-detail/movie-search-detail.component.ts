import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppBaseComponent } from 'src/app/core/base-component/app-base.component';
import { Movie } from 'src/app/models/movie';
import Store, { AppKey } from 'src/app/shared/store';

@Component({
  selector: 'app-movie-search-detail',
  templateUrl: './movie-search-detail.component.html',
  styleUrls: ['./movie-search-detail.component.scss']
})
export class MovieSearchDetailComponent extends AppBaseComponent{
  data?:Movie;
  constructor(private pgRoute:Router) {
    super(pgRoute);
  }
  override ngOnInit(): void
  {
    var movie= new Store().get(AppKey.SELECTEDMOVIE) as Movie;
    if(!movie){
      //display no movie selected
    }
    else{
      this.data= movie;
    }
  }
}
