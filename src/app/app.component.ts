import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Asistencias', url: 'Asistencias', icon: 'checkbox' },
    { title: 'Personal', url: 'Personal', icon: 'people' },
    { title: 'Escuelas', url: 'Escuelas', icon: 'school' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
