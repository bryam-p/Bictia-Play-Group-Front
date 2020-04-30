import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interface/film.interface';
import { FilmsService } from 'src/app/core/service/films/films.service';
import { UserService } from 'src/app/core/service/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  resultsSearch: any[] = []
  public videoDefault = null;
  ultimosEstrenosPPAL = [
    {
      url: 'https://www.youtube.com/embed/1ZIQPH92hxM',
      name: 'Mickey Mouse - Una boda en Gollywodd',
      urlImage: 'preview_mickeyUnabodaenGollywodd.png'
    },
    {
      url: 'https://www.youtube.com/embed/lC2zy41B1GM',
      name: 'La Casa de Mickey Mouse',
      urlImage: 'preview_laCasadeMickey.png'
    },
    {
      url: 'https://www.youtube.com/embed/NsSxViwqbZ8',
      name: 'Despertador Alocado - Minnie Mouse Toons',
      urlImage: 'preview_MinnieToons.png'
    }
  ];
  ultimosEstrenosSEC = [
    {
      url: 'https://www.youtube.com/embed/0dkHZYeIGIk',
      name: 'La vaca Lola - Canciones infantiles',
      urlImage: 'preview_vacaLola.png'
    },
    {
      url: 'https://www.youtube.com/embed/VHfCOT_ZKu8',
      name: 'Leo - El pequeño camión',
      urlImage: 'preview_leoCamineta.png'
    },
    {
      url: 'https://www.youtube.com/embed/GetAwMNY2kY',
      name: 'Paw Patrol - La Fuerza une al equipo',
      urlImage: 'preview_pawpatrolLaFuerza.png'
    }
  ];

  cerrarVideo() {
    // Función para cerrar el reproductor del video
    const reproductor = document.getElementById('reproductor');
    const videoYoutube = document.getElementById('videoYoutube');
    reproductor.classList.toggle('mostrarVideo');
    videoYoutube.setAttribute('src', this.videoDefault);
    console.log('Se cerró el video');
  }

  abrirVideo(filmUrl) {
    // Función para cerrar el reproductor del video
    const reproductor = document.getElementById('reproductor');
    const videoYoutube = document.getElementById('videoYoutube');
    videoYoutube.setAttribute('src', filmUrl);
    this.videoDefault = filmUrl;
    reproductor.classList.toggle('mostrarVideo');
    console.log("Este es el video: ->", this.videoDefault);
  }

  public films: Film[];
  public recorrido: number;

  constructor(private service: FilmsService, private userService: UserService) {
    this.getSearch()
  }

  ngOnInit(): void {
    this.getFavorites();
  }

  getSearch() {
    this.service.$ConecctionSearch.subscribe((data: any) => {
      console.log("Datos del search en home", data)
      this.resultsSearch = data.results
      const statusSearch = document.getElementById('resultado')
      statusSearch.style.display = 'block'
    })
  }

  getFavorites() { //Se suscribe al servicio
    let id = localStorage.getItem('id')
    this.userService.getFavorite(id).subscribe((data: any) => {
      let profile;
      for (let i = 0; i < data.user.profiles.length; i++) {
        if (data.user.profiles[i].name === localStorage.getItem('profileName')) {
          const favoriteFilms = data.user.profiles[i].favoriteFilms
          if (favoriteFilms) {
            this.films = favoriteFilms;
          }
        }
      }
    });
  }

  deleteFavorite(movieId) {
    let id = localStorage.getItem('id')
    let name = localStorage.getItem('profileName')
    this.userService.delFavorite(id, movieId, name).subscribe((data: any) => {
      console.log(data)
    })
  }
}
