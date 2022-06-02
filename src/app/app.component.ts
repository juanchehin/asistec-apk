import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Asistencias', url: '/folder/Asistencias', icon: 'checkbox' },
    { title: 'Personal', url: '/folder/Personal', icon: 'people' },
    { title: 'Escuelas', url: '/folder/Escuelas', icon: 'school' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
