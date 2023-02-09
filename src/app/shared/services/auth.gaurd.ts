import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url: string = state.url;
    return this.checkUserLogin(route, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.auth.authenticated) {

      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (new Date(currentUser.expireDate) < new Date()) {
        // token expire so redirect to login page with the return url
        this.router.navigate(['/sessions/signin']);
        return false;
      }
      else {
        return true;
      }
    }

    this.router.navigate(['/sessions/signin']);
    return false;
  }
}
