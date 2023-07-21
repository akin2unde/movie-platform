import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppBaseComponent } from 'src/app/core/base-component/app-base.component';
import { NotificationType } from 'src/app/models/Notification';
import { Errorresponse } from 'src/app/models/error-response';
import { Movie } from 'src/app/models/movie';
import { AppUtilService } from 'src/app/shared/services/app-util/app-util.service';
import { HttpWebRequestService } from 'src/app/shared/services/http-web-request/http-web-request.service';
import Store, { AppKey } from 'src/app/shared/store';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent  extends AppBaseComponent {
  searchString:string='';
  searchFocus:boolean=false;
  data:Movie[]=[];
  last5Searched= new Store().get(AppKey.LAST5SEARCHEDRESULT)? new Store().get(AppKey.LAST5SEARCHEDRESULT)as Movie[]:[];
  constructor(private pgRoute:Router,public utilService:AppUtilService,private req: HttpWebRequestService) {
    super(pgRoute);
  }
  showLast5Searched(){
     this.data= [...this.last5Searched];
  }
  viewDetail(movie:Movie){
    new Store().set(AppKey.SELECTEDMOVIE,movie);
    this.goToPage("movie-search-detail");
  }
  async searchMovie(){
    // this.start();
    var res=await this.req.get(`Movie/GetMovieByTitle/${this.searchString}`);
    if(res instanceof Errorresponse){
      this.showNotification({NotificationType:NotificationType.Error,Message:res.ErrorMsg});
    }
    else{
       this.data.length=0;
       this.data=[res as Movie];
       var found= this.last5Searched.find(f=>f.Title==this.data[0].Title);
       if(!found){
        this.last5Searched.unshift(this.data[0]);
        console.log(this.last5Searched);
        if(this.last5Searched.length>5){
          this.last5Searched.splice(5,1);
        }
        new Store().set(AppKey.LAST5SEARCHEDRESULT,this.last5Searched);
       }
    }
  }
}
