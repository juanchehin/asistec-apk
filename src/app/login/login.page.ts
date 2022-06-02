import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [],
})
export class LoginPage implements OnInit {

  isLoading = false;
  isLogin = true;

  constructor() { }

  ngOnInit() {
  }

  authenticate(email: string, password: string) {
    this.isLoading = true;

    // Chequear con user y pass de drive
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }


  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

}
