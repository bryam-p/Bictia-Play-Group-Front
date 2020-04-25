import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ElegirPerfilComponent } from '../profile/components/elegir-perfil/elegir-perfil.component';
import { AgregarPerfilComponent} from '../profile/components/agregar-perfil/agregar-perfil.component';



const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'play', component: PlayComponent },
  {path: 'favorites', component: FavoritesComponent},
  {path: 'editarPerfil', component: EditarPerfilComponent},
  {path: 'elegirPerfil', component: ElegirPerfilComponent},
  {path: 'agregarPerfil', component: AgregarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
