import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./asistencias/asistencias.module').then( m => m.AsistenciasPageModule),
    canLoad: [AuthGuardService]
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule),
    canLoad: [AuthGuardService]
  },
  {
    path: 'nuevo-personal',
    loadChildren: () => import('./personal/nuevo-personal/nuevo-personal.module').then( m => m.NuevoPersonalPageModule),
    canLoad: [AuthGuardService]
  },
  {
    path: 'escuelas',
    loadChildren: () => import('./escuelas/escuelas.module').then( m => m.EscuelasPageModule),
    canLoad: [AuthGuardService]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
