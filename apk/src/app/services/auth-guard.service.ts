import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

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
