import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NuevoPersonalPage } from './nuevo-personal.page';
import { NuevoPersonalPageRoutingModule } from './nuevo-personal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevoPersonalPageRoutingModule
  ],
  declarations: [NuevoPersonalPage]
})
export class NuevoPersonalPageModule {}
