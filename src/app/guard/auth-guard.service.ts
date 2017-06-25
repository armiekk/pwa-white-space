import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenService } from '../service/authen.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user.map((val) => {
      if (val && val.uid) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    })
  }

}
