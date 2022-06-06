import { Component, OnInit } from '@angular/core';
import { Personal } from '../models/personal.model';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: [],
})
export class PersonalPage implements OnInit {

  personal: any;
  desde = 0;

  constructor(
    private personalService: PersonalService
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

}
