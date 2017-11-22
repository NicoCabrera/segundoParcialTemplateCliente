import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class VerifyJwtService implements CanActivate {


  constructor(private router: Router, private auth: AuthService, ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

    if(state.url ==   "/registered-user/only-admin"){
      let userType = this.auth.getToken().data.rol;
      if(userType != "Admin" || !this.auth.isLogued()){
        console.log("Usted no es usuario administrador");
        return false;
      }
      else{
        return true;
      }
    }
    if (this.auth.isLogued()) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
