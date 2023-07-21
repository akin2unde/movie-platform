import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Errorresponse } from 'src/app/models/error-response';

export const baseUrl='http://localhost:5078';
@Injectable({
  providedIn: 'root'
})
  
export class HttpWebRequestService {
  isProd = false;
  constructor(private http: HttpClient) {

  }
  get(url: string) {
    const URL = baseUrl + `/${url}`;
    return   new Promise((resolve, reject) => {this.http.get<Array<any>>(URL)
      .subscribe({
      next: (data) => resolve(data),
      error: (err) => resolve(new Errorresponse(err.error ? err.error.ErrorMsg?err.error.ErrorMsg:err.error.errors?(err.error.errors.values as string[]).toString():"":
      err.status+" "+ err.statusText))
    });})
  }


  post(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(baseUrl+"/"+url, JSON.stringify(body))
        .subscribe({
          next: (data) => resolve(data),
          error: (err) => resolve(new Errorresponse(err.error ? err.error.ErrorMsg?err.error.ErrorMsg:err.error.errors?(err.error.errors.values as string[]).toString():"":
          err.status+" "+ err.statusText))
        });
    });
  }
  put(url: string, body: any) {
    return this.http.put(baseUrl+"/"+url, body);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(baseUrl+"/"+ url);
  }
}
