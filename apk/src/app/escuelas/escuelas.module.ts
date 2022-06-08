import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EscuelasPage } from './escuelas.page';
import { EscuelasPageRoutingModule } from './personal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuelasPageRoutingModule
  ],
  declarations: [EscuelasPage]
})
export class EscuelasPageModule {}
