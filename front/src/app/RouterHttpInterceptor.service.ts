import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RouterHttpInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let clone: HttpRequest<any>;
    clone = request.clone({
      setHeaders: {
        Accept: `application/json`,
        "Content-Type": `application/json`
      }
    });
    return next.handle(clone);
  }
}
