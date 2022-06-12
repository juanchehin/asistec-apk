import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { Storage } from '@capacitor/Storage';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  user: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new BehaviorSubject<any>(null);
  private activeLogoutTimer: any;
  token: any;

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }

  get userId() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.id;
        } else {
          return null;
        }
      })
    );
  }

  // get token() {
  //   return this._user.asObservable().pipe(
  //     map(user => {
  //       if (user) {
  //         return user.token;
  //       } else {
  //         return null;
  //       }
  //     })
  //   );
  // }

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {}


// ==================================================
//        Permite saber si un usuario esta logueado
// ==================================================
estaLogueado() {

  // this.token = localStorage.getItem('token');
  this.token = Storage.get({ key: 'token' });

  if ((this.token === 'undefined') || (this.token === null)) {
    return false;
  } else {
    return( this.token.length > 5) ? true : false;

  }
}

// ==================================================
//        Permite saber si un usuario esta logueado
// ==================================================
  login(user: string, password: string) {

    if(user === environment.user && password == environment.pass)
    {
      async () => {
        await Storage.set({
          key: 'token',
          value: 'ciidept-centro',
        });
      };
      return true;
    }
    return false;
  }

// ==================================================
//    Logout
// ==================================================
  logout() {
    // localStorage.removeItem('token');
    Storage.remove({ key: 'token' });
    this.router.navigate(['/login']);
    this.settingsService.limpiarIP();
  }

}
