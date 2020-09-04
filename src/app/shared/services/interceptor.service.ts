import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _commonService: CommonService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    // let currentUser = this._commonService.user;
    // request = request.clone(this._commonService.http_option());

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this._commonService.clearStorage();
          this._commonService.showErrorToast(
            'Session Expired please login again',
            'Error!!!'
          );
        }

        // const error = err.error || err.statusText;
        return throwError(err);
      })
    );
  }
}
