import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [HomeComponent, PlayComponent, FavoritesComponent, EditarPerfilComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
