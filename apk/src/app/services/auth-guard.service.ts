import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import { PersonalService } from './personal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService, public router: Router
  ) { }

  canActivate() {
    if ( this.authService.estaLogueado()) {
      return true;
     } else {
       this.router.navigate(['/login']);
       return false;
    }
  }
}
