import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscuelasService } from '../services/escuelas.service';

@Component({
  selector: 'app-escuelas',
  templateUrl: './escuelas.page.html'
})
export class EscuelasPage implements OnInit {
  desde: number;
  escuelas: any;
  totalEscuelas = 0;

  constructor(
    private escuelasService: EscuelasService,
    private router : Router
  ) { }

  ngOnInit() {
    this.cargarEscuelas();
  }


// ==================================================
//  Busca un cliente por plan o por todos
// ==================================================

buscar( ) {

  const inputElement: HTMLInputElement = document.getElementById('pBusqueda') as HTMLInputElement;
  const pBusqueda: any = inputElement.value || null;

  this.escuelasService.buscarEscuela( pBusqueda )
          .subscribe( (resp: any) => {

            this.escuelas = resp[0];

      });

}

// ==================================================
//
// ==================================================
cargarEscuelas(){
  this.escuelasService.cargarEscuelas( this.desde )
           .subscribe( (resp: any) => {

            this.escuelas = resp[0];

          });
}

// ==================================================
//        Cambio de valor
// ==================================================

cambiarDesde( valor: number ) {

  const desde = this.desde + valor;  // puede ser + o -

  if ( desde  >= this.totalEscuelas ) {
    return;
  }

  if ( desde < 0 ) {
    return;
  }

  this.desde += valor;
  this.cargarEscuelas();

}

}
