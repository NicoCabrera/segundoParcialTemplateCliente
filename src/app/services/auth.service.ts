import { Injectable } from '@angular/core';
import { AuthHttp, AuthConfig, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private router: Router) {
  }

  public isLogued() {
    try {
      let rta = tokenNotExpired() || false;
      return rta;
    } catch (error) {
      return false;
    }
  }

  public getToken() {
    try {
      return this.jwtHelper.decodeToken(localStorage.getItem("token"));
    } catch (error) {
      return undefined;
    }
  }

  public getExpirationDate() {

    try {
      //console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(localStorage.getItem("token")))
      return this.jwtHelper.getTokenExpirationDate(localStorage.getItem("token"));
    } catch (error) {
      return null;
    }
  }

  public logOut() {
    try {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/');
    } catch (error) {
      return false;
    }
  }

}