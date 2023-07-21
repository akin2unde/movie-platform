import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Notification, NotificationType } from "src/app/models/Notification";
import { AppUtilService } from "src/app/shared/services/app-util/app-util.service";
import { Location } from '@angular/common';
import { Util } from "../util";
import Store, { AppKey } from "src/app/shared/store";
import { Movie } from "src/app/models/movie";

@Component({
    styleUrls: ['./app-base.component.scss'],
    template:''
  })
  export class AppBaseComponent implements OnInit {
    NotificationType=NotificationType;
    public loading: boolean = false;
    appUtilService= inject(AppUtilService);
    location= inject(Location)
    isMobile = window.innerWidth <= 768;
    dataLoading = false;
    limit:number=20;
    skip:number=0;
    lastItem:string="";
    totalDataSize:number=0;
    isModelFromUpload = false;
    constructor(
        private route: Router,
        // private appUtilService:AppUtilService
    ) { 

    }
  
    ngOnInit(): void {

    }
    getSvg(name:string,isImage:boolean=false){
     return Util.getSvg(name,isImage);
    }
    goToPage(page:string, extra?:any){
      if(extra)
      {
        this.route.navigate([`/${page}`, extra]);
      }
      else{
        this.route.navigate([`/${page}`]);
      }
    }
    goBack(){
      this.location.back();
    }
    showLoader(): void {
      this.appUtilService.sendBI(true);
      this.loading=true;
    }
    closeLoader(): void {
      this.loading=false
      this.appUtilService.sendBI(false);
    }
    showNotification(notif:Notification){
      this.appUtilService.sendShowNotification(notif);
    }
  
    start() { this.dataLoading = true; }
    end() { this.dataLoading = false; }

    closeUploadModel() { this.isModelFromUpload = false }
  }