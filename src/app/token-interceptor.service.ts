import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any){

    let authService=this.injector.get(AuthService);
    let tokenizedReq=req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)
  }
}
