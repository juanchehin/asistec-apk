import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Storage } from '@capacitor/Storage';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {}


// ==================================================
//        Permite saber si un usuario esta logueado
// ==================================================
estaLogueado() {

  // this.token = localStorage.getItem('token');
  Storage.get({ key: 'token' }).then((result) => {
    this.token = result.value;
  });

  if ((this.token === "ciidept-centro")) {
    return true;
  } else {
    return false;

  }
}

// ==================================================
//        Permite saber si un usuario esta logueado
// ==================================================
  login(user: string, password: string) {

    if(user === environment.user && password == environment.pass)
    {
      Storage.set({
          key: 'token',
          value: 'ciidept-centro',
        });

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
    this.token = null;
    this.router.navigate(['/login']);
    this.settingsService.limpiarIP();
  }

}
