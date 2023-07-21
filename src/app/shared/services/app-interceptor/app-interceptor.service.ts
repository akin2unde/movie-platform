import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Injectable()
export class AppInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    const defaultToken= 'ALLEFPLDAiLCJTdGF0ZSI6DPQ==';
    const req = request.clone({
      headers: request.headers
        .set("Content-Type", "application/json")
        .set("Authorization",  defaultToken)
    });

    return next.handle(req)
      .pipe(
        tap({
          next: (event) => (event instanceof HttpResponse ),
          error: ((error: HttpErrorResponse) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
              console.log('this is client side error');
              errorMsg = `Error: ${error.error.message}`;
            }
            else {
              console.log('this is server side error');
              console.log(error);
              errorMsg = error.error? `${error.error.ErrorMsg?error.error.ErrorMsg:error.error.errors?(error.error.errors.values as string[]).toString():""}`: error.status +" "+error.statusText ;
            }
            // ErrorMsg:string,public StatusCode?:number,public FullLog
            if(error.statusText=="Unknown Error"){
              errorMsg="Server is unreachable"
            }
            return throwError(()=> errorMsg );
          }),
        }),
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             Reponse in ${elapsed} ms.`;
        })

      )
  }
}
