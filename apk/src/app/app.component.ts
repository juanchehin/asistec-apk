import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth-service.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public appPages = [
  //   { title: 'Asistencias', url: 'Asistencias', icon: 'checkbox' },
  //   { title: 'Personal', url: 'Personal', icon: 'people' },
  //   { title: 'Escuelas', url: 'Escuelas', icon: 'school' },
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // public labels = [];
  // constructor() {}

  private authSub: Subscription;
  private previousAuthState = false;

  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router,
    private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(Capacitor.isPluginAvailable('SplashScreen')){
        this.splashScreen.hide();
      }
    });
  }

  ngOnInit() {
    this.authSub = this.authService.userIsAuthenticated.subscribe(isAuth => {
      this.router.navigateByUrl('/login');
      console.log("isAuth es : ", isAuth);
      if (!isAuth && this.previousAuthState !== isAuth) {
        console.log("pasa if : ");
        this.router.navigateByUrl('/login');
      }
      this.previousAuthState = isAuth;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}