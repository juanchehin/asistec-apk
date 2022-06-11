import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Personal } from 'src/app/models/personal.model';

const URL_SERVICIOS = environment.URL_SERVICIOS;


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  token!: any;

  constructor(
    private http: HttpClient
  ) { }

  // ======================
  cargarPersonal(desde){

    desde = desde || 0;

    let url = URL_SERVICIOS + '/personal/listar/' + desde;

    return this.http.get(url);
  }

// ======================
  buscarPersonal(pBusqueda){

    let url = URL_SERVICIOS + '/personal/busqueda/' + pBusqueda;

    return this.http.get(url);
  }

  // ======================
  crearPersonal(personal: Personal){

    let url = URL_SERVICIOS + '/personal/nuevo';

    return this.http.post(
      url,
      personal
      );
  }

  // ======================
  marcarAsistencia(pDNI){

    let url = URL_SERVICIOS + '/asistencias/marcar/' + pDNI;

    return this.http.get(url);
  }

    // ======================
    cargarAsistenciasHoy(pDesde){

      let url = URL_SERVICIOS + '/asistencias/listar/' + pDesde;

      return this.http.get(url);
    }



}
