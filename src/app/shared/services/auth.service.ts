import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated = false;

  constructor(private store: LocalStoreService, private router: Router) {
    this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("rms_login_status");
    if(this.store.getItem("rms_login_status")==true)
    {
      this.authenticated = true;
    }
    else{
      this.authenticated = false;
    }
  }

  getuser() {
    return of({});
  }

  signin(credentials) {
    this.authenticated = true;
    this.store.setItem("rms_login_status", true);
    return of({}).pipe(delay(1500));
  }
  signout() {
    this.authenticated = false;
    this.store.setItem("rms_login_status", false);
    this.router.navigateByUrl("/sessions/signin");
  }
}
