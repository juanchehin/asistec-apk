import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const URL_SERVICIOS = environment.URL_SERVICIOS;


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

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
}
