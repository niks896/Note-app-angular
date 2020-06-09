import { Injectable } from '@angular/core';
import { Router, CanActivate,CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService implements CanActivate {
  constructor(private router : Router, private AuthService: AuthService,
 ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if(!this.AuthService.isloggedin()) {
    return this.router.navigate(['login']);
    }
  return true;
}

}
