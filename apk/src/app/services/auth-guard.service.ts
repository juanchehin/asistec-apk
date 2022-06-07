import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import { PersonalService } from './personal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor(
    public authService: AuthService, public router: Router
  ) { }

  canLoad() {
    if ( this.authService.estaLogueado()) {
      console.log("estas logueado");
      return true;
     } else {
      console.log("no estas logueado");
       this.router.navigate(['/login']);
       return false;
    }
  }

}
