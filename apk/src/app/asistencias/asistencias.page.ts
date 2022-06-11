import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: [],
})
export class AsistenciasPage implements OnInit {

  desde = 0;
  asistencias: any;
  totalAsistencias = 0;

  constructor(
    private personalService: PersonalService
  ) { }

  ngOnInit() {
    this.cargarAsistencias();
  }


// ==================================================
//  Carga la asistencia del dia de hoy
// ==================================================
cargarAsistencias(){

  this.personalService.cargarAsistenciasHoy( this.desde )
           .subscribe( (resp: any) => {

            this.asistencias = resp[0];
            this.totalAsistencias = resp[1];


          });
}


// ==================================================
//        Cambio de valor
// ==================================================

cambiarDesde( valor: number ) {

const desde = this.desde + valor;  // puede ser + o -

if ( desde  >= this.totalAsistencias ) {
  return;
}

if ( desde < 0 ) {
  return;
}


this.desde += valor;
this.cargarAsistencias();

}

}
