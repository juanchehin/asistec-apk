import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Personal } from 'src/app/models/personal.model';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  token!: any;
  URL_SERVICIOS = `http://${this.settingsService.IP}:3000/api`;


  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) { }

  // ======================
  cargarPersonal(desde){

    desde = desde || 0;

    console.log("URL_SERVICIOS : ",this.URL_SERVICIOS)

    let url = this.URL_SERVICIOS + '/personal/listar/' + desde;

    return this.http.get(url);
  }

// ======================
  buscarPersonal(pBusqueda){

    let url = this.URL_SERVICIOS + '/personal/busqueda/' + pBusqueda;

    return this.http.get(url);
  }

  // ======================
  crearPersonal(personal: Personal){

    let url = this.URL_SERVICIOS + '/personal/nuevo';

    return this.http.post(
      url,
      personal
      );
  }

  // ======================
  marcarAsistencia(pDNI){

    let url = this.URL_SERVICIOS + '/asistencias/marcar/' + pDNI;

    return this.http.get(url);
  }

    // ======================
    cargarAsistenciasHoy(pDesde){

      let url = this.URL_SERVICIOS + '/asistencias/listar/' + pDesde;

      return this.http.get(url);
    }



}
