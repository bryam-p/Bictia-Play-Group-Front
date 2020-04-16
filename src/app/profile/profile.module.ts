import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ElegirPerfilComponent } from './components/elegir-perfil/elegir-perfil.component';
import { AgregarPerfilComponent } from './components/agregar-perfil/agregar-perfil.component';


@NgModule({
  declarations: [ElegirPerfilComponent, AgregarPerfilComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
