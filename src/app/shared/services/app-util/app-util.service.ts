import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification } from 'src/app/models/Notification';

export type OptionData = {
  name: string;
  value: string;
  extra?: any;
};
export type ActionMenu = {
  label: string;
  icon: string;
  command: () => void;
};
@Injectable({
  providedIn: 'root',
})
export class AppUtilService {
  private notifSubject = new Subject<Notification>();
  private biSubject = new Subject<boolean>();
  
  constructor() {}
  sendShowNotification(notification: Notification) {
    this.notifSubject.next(notification);
  }
  listenToNotificationChange(): Observable<Notification> {
    return this.notifSubject.asObservable();
  }

  sendBI(data: boolean) {
    this.biSubject.next(data);
  }
  listenToBIChange(): Observable<boolean> {
    return this.biSubject.asObservable();
  }

  randomEnumValue(enumeration: any) {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
  }
}
