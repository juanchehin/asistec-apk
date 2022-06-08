import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html'
})
export class PersonalPage implements OnInit {

  personal: any;
  desde = 0;
  totalPersonal = 0;

  constructor(
    private personalService: PersonalService,
    private router : Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.cargarPersonal();
  }

// ==================================================
//  Cargar personal
// ==================================================
  cargarPersonal(){

    this.personalService.cargarPersonal( this.desde )
             .subscribe( (resp: any) => {

              this.personal = resp[0];
              this.totalPersonal = resp[1][0].cantPersonal;


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

marcarAsistencia(pDNI: any ) {

  this.personalService.marcarAsistencia( pDNI )
    .subscribe( (resp: any) => {

      if(resp.Mensaje === 'Ok')
      {
        this.showAlert('Asistencia marcada');
      }else
      {
        this.showAlert('Ocurrio un error');
      }

});

}

// ==================================================
//        Cambio de valor
// ==================================================

cambiarDesde( valor: number ) {

  const desde = this.desde + valor;  // puede ser + o -

  if ( desde  >= this.totalPersonal ) {
    return;
  }

  if ( desde < 0 ) {
    return;
  }


  this.desde += valor;
  this.cargarPersonal();

}

// ==================================================
//        Mensaje
// ==================================================

private showAlert(message: string) {
  this.alertCtrl
    .create({
      header: 'Mensaje',
      message: message,
      buttons: ['Okay']
    })
    .then(alertEl => alertEl.present());
}


}
