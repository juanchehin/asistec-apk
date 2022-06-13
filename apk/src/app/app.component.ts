import { Component } from '@angular/core';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Asistencias', url: 'asistencias', icon: 'checkbox' },
    { title: 'Personal', url: 'personal', icon: 'people' },
    { title: 'Escuelas', url: 'escuelas', icon: 'school' },
  ];
  public labels = [
    { title: 'Logout', url: 'logout', icon: 'log-in-outline' }
  ];

  constructor(
    public authService: AuthService
  ) {
  }

  initializeApp() {

  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {

  }
}
