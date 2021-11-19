import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  //inject account service
  constructor(private accountService: AccountService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User;

    //By using take, it stops after it gets one user, so it doesn't need to unsubscribe
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user)
    //Check if there is a current user
    if(currentUser){
      //clone request and add authentication header onto it
      request = request.clone({
        setHeaders: {
          //attach token for every login request and send it up with the request
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
    return next.handle(request);
  }
}
