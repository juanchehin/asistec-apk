import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Personal } from 'src/app/models/personal.model';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-nuevo-personal',
  templateUrl: './nuevo-personal.component.html'
})
export class NuevoPersonalPage implements OnInit {

  form: FormGroup;

  constructor(
    private personalService: PersonalService
  ) { }

  ngOnInit(){
    this.form = new FormGroup({
      Apellidos: new FormControl(null, Validators.required),
      Nombres: new FormControl(null, Validators.required),
      DNI: new FormControl(null, Validators.required)
    })
  }

// =================================================
//        ALTA DE PERSONAL
// ==================================================


registrarPersonal() {

  if ( this.form.invalid ) {
    return;
  }

  const personal = new Personal(
    null,
    null,
    this.form.value.Apellidos,
    this.form.value.Nombres,
    this.form.value.DNI,
    null,
    null,
    null,
    null
  );

  this.personalService.crearPersonal( personal )
            .subscribe( (resp: any) => {

              console.log("resp es : ",resp)
              // if ( resp.Mensaje === 'Ok') {
              //   Swal.fire({
              //     position: 'top-end',
              //     icon: 'success',
              //     title: 'Profesional "' + this.forma.value.Usuario + '" cargado',
              //     showConfirmButton: false,
              //     timer: 2000
              //   });
              //   this.router.navigate(['/mantenimiento/profesionales']);
              // } else {
              //   Swal.fire({
              //     icon: 'error',
              //     title: 'Hubo un problema al cargar',
              //     text: resp.Mensaje,
              //   });
              // }
            });
}

}
