import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html'
})
export class SettingsPage implements OnInit {
  form: FormGroup;

  constructor(
    public settingsService: SettingsService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      IP: new FormControl(null, Validators.required)
    })
  }

// == Guarda la direccion IP en una variable en un servicio ==
cargarSettings(){
  if ( this.form.invalid ) {
    return;
  }

  this.settingsService.cargarSettings( this.form.value.IP );

  this.showAlert("Cargado correctamente");

}

// == ==
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
