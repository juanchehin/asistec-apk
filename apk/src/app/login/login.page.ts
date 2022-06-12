import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth-service.service';
import { SettingsService } from '../services/settings.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html'
})
export class LoginPage implements OnInit {

  isLoading = false;
  isLogin = true;
  // router: any;

  constructor(
    private authService: AuthService,
    private settingsService: SettingsService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router : Router
  ) { }

  ngOnInit() {
  }

  authenticate(user: string, password: string) {
    this.isLoading = true;

    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();
        // let authObs: Observable<any>;
        // let authObs: boolean;

        if (this.authService.login(user, password)) {
            if((this.settingsService.IP != undefined) && (this.settingsService.IP != null) && (this.settingsService.IP != 'undefined'))
            {
              this.isLoading = false;
              loadingEl.dismiss();
              this.router.navigateByUrl("personal");
            }
            else {
              this.showAlert('Debe ingresar la IP desde settings');
              loadingEl.dismiss();
            }
        } else {
          this.showAlert('Error de logueo');
          loadingEl.dismiss();
          // authObs = this.authService.signup(email, password);
        }
      });


  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Mensaje',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const user = form.value.user;
    const password = form.value.password;

    this.authenticate(user, password);
    form.reset();
  }

}
