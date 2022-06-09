import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      setHeaders: {
        'Tenant-Identifier':
          '9d7d6eeb25cd6083e0df323a0fff258e59398a702fac09131275b6b1911e202d',
      },
    });
    return next.handle(authReq);
  }
}
