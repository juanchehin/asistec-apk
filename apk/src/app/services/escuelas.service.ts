import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class EscuelasService {

  token!: any;
  URL_SERVICIOS = `http://${this.settingsService.IP}:3000/api`;

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) { }


  // ======================
  cargarEscuelas(desde){


    desde = desde || 0;

    let url = this.URL_SERVICIOS + '/escuelas/listar/' + desde;

    return this.http.get(url);
  }

// ======================
  buscarEscuela(pBusqueda){

    let url = this.URL_SERVICIOS + '/escuelas/busqueda/' + pBusqueda;

    return this.http.get(url);
  }

}
