import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt' ;

@Injectable({
  providedIn: 'root'
})
export class OuthService implements CanActivate{
  constructor() { }

  helper = new JwtHelperService();

  canActivate()
  {
    if(localStorage.getItem("token"))
    {
      console.log(this.helper.decodeToken(localStorage.getItem("token")));
      return true;
    } 

    return false;
  }
}
