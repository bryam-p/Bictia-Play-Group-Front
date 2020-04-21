import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElegirPerfilComponent } from './components/elegir-perfil/elegir-perfil.component';
import { AgregarPerfilComponent } from './components/agregar-perfil/agregar-perfil.component'


const routes: Routes = [
  {path: '/elegirPerfil', component: ElegirPerfilComponent},
  {path: '/agregarPerfil', component: AgregarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
