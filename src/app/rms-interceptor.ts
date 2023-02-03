import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable()
export class RMSInterceptor implements HttpInterceptor {
    constructor( private spinner: NgxSpinnerService,  public _router: Router,) {}
  
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinner.show();

        if(JSON.parse(localStorage.getItem('currentUser'))!=null)
        {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).access_token,
                }
            });
        }       
        return next.handle(req).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {

              this.spinner.hide();
            }
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
              if(error.status==401)
              {
                this._router.navigateByUrl('/sessions/signin');
                localStorage.setItem('UserLogoutType', 'logout');
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'You\'ve logged out!.',
                    footer: ''
                });
              }
              
            const started = Date.now();            
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
            this.spinner.hide();
            return throwError(error);
          })
        );

    }  
}