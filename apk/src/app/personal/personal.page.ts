import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from '../models/personal.model';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html'
})
export class PersonalPage implements OnInit {

  personal: any;
  desde = 0;

  constructor(
    private personalService: PersonalService,
    private router : Router
  ) { }

  ngOnInit() {
    this.cargarPersonal();
  }

  cargarPersonal(){

    this.personalService.cargarPersonal( this.desde )
             .subscribe( (resp: any) => {

              this.personal = resp[0];


            });
  }

// ==================================================
//  Busca un cliente por plan o por todos
// ==================================================

buscar( ) {

  const inputElement: HTMLInputElement = document.getElementById('pBusqueda') as HTMLInputElement;
  const pBusqueda: any = inputElement.value || null;


  this.personalService.buscarPersonal( pBusqueda )
          .subscribe( (resp: any) => {

            this.personal = resp[0];

      });

}

// ==================================================
//  enrutar
// ==================================================

enrutar( ) {

  this.router.navigateByUrl("nuevo-personal");

}
// ==================================================
//  asistencia
// ==================================================

marcarAsistencia(IdPersona: any ) {

  this.router.navigateByUrl("nuevo-personal");

}

// ==================================================
//        Cambio de valor
// ==================================================

cambiarDesde( valor: number ) {

  const desde = this.desde + valor;

  // if ( desde >= this.totalClientes ) {
  //   return;
  // }

  // if ( desde < 0 ) {
  //   return;
  // }

  // this.desde += valor;
  // this.cargarClientes();

}

}
