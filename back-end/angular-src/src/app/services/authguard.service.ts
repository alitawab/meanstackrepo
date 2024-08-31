import { Injectable } from '@angular/core';
import { Router , CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private userAuth: AuthenticationService , private router: Router) { }

  canActivate() {
    if (!this.userAuth.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

}
