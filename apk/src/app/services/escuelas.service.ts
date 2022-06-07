import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const URL_SERVICIOS = environment.URL_SERVICIOS;

@Injectable({
  providedIn: 'root'
})
export class EscuelasService {

  token!: any;

  constructor(
    private http: HttpClient
  ) { }


  // ======================
  cargarEscuelas(desde){

    console.log("cargarEscuelas es : ")
    desde = desde || 0;

    let url = URL_SERVICIOS + '/escuelas/listar/' + desde;

    return this.http.get(url);
  }

// ======================
  buscarEscuela(pBusqueda){

    let url = URL_SERVICIOS + '/escuelas/busqueda/' + pBusqueda;

    return this.http.get(url);
  }

}
