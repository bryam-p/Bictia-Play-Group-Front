import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user/user.service';



@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {


  constructor(
    private userService: UserService,
    private router: Router) {

  }

  canActivate() {
    if (this.userService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/auth/login'])
    return false
  }

}
