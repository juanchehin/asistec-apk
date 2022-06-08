import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  IP: string;

  constructor() { }

// == Guarda la direccion IP ==
cargarSettings(pIP: string){
  this.IP = pIP;
}

}
