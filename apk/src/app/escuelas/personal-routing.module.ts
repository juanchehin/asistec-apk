import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscuelasPage } from './escuelas.page';

const routes: Routes = [
  {
    path: '',
    component: EscuelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscuelasPageRoutingModule {}
