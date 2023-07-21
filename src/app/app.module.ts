import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptorService } from './shared/services/app-interceptor/app-interceptor.service';
import { SharedModule } from './shared/modules/shared.module';
import { MovieSearchComponent } from './views/pages/movie-search/movie-search.component';
import { MovieSearchDetailComponent } from './views/pages/movie-search-detail/movie-search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AppInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
