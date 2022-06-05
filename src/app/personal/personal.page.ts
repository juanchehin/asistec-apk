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
              console.log('resp es : ', resp);

              this.personal = resp[0];


            });
  }

}
