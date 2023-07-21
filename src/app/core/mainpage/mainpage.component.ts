import { AppBaseComponent } from '../base-component/app-base.component';
import { AppUtilService } from 'src/app/shared/services/app-util/app-util.service';
import { Subscription } from 'rxjs';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { Notification, NotificationType } from 'src/app/models/Notification';
import { Component } from '@angular/core';
import { Util } from '../util';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  providers: [ConfirmationService, MessageService]

})
export class MainpageComponent {
  NotificationType=NotificationType;
 currentRoute: string='';
 notifIcon:string='';
 notifBgColor:string='';
 notifTextColor:string='';
 currentCompoent?:AppBaseComponent;
 notificationEveSubscription?:Subscription;
 biEveSubscription?:Subscription;
 notification?:Notification;
 isLoading:boolean=false;
 constructor(private confirmationService: ConfirmationService,private appUtilService:AppUtilService,private ms: MessageService) 
 {
 this.notificationEveSubscription= this.appUtilService.listenToNotificationChange().subscribe((data)=>{
    this.showNotification(data);
 });
 this.biEveSubscription= this.appUtilService.listenToBIChange().subscribe((data)=>{
  this.isLoading= data;
 });
  // this.router.events.subscribe((event: any) => {
  //   if (event instanceof NavigationStart) {
  //       // Show progress spinner or progress bar
  //       console.log('Route change detected');

  //   }

  //   if (event instanceof NavigationEnd) {
  //       // Hide progress spinner or progress bar
  //       this.currentRoute = event.url;          
  //   }

  //   if (event instanceof NavigationError) {
  //        // Hide progress spinner or progress bar

  //       // Present error to user
  //       console.log(event.error);
  //   }
  //  });
 }
 showWarningDlg(){
  this.confirmationService.confirm({
    message: this.notification?.Message,
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      if(this.notification?.okClick)
        this.notification?.okClick();
    },
    reject: (type:ConfirmEventType) => {
        switch (type) {
            case ConfirmEventType.REJECT:
                if(this.notification?.cancelClick)
                this.notification?.cancelClick();
                break;
            case ConfirmEventType.CANCEL:
              if(this.notification?.onClose)
                this.notification?.onClose();
                break;
        }
    }
});
 }
 showNotification(notif:Notification){
  this.ms.clear();
  this.notification= notif;
  if(this.notification){
  switch(this.notification.NotificationType){
    case NotificationType.Error:
      this.notifIcon= Util.getSvg("error-red.svg",false);//sticky:true,
      this.ms.add({   severity: 'error', summary: this.notification.Title?this.notification.Title:"Error", detail: this.notification.Message });
      break;
      case NotificationType.Success:
        this.notifIcon= Util.getSvg("mark-green.svg",false);
        this.ms.add({severity: 'success', summary: this.notification.Title?this.notification.Title:"Success", detail: this.notification.Message });
        break;
        case NotificationType.Warning:
        this.notification= this.notification;
        this.showWarningDlg();
          break;    
      default:
        this.notifIcon= Util.getSvg("info-blue.svg",false);
        this.ms.add({ life:6000, severity: 'info', summary: this.notification.Title?this.notification.Title:"Information", detail: this.notification.Message });
        break;
  }
  }

 }

}