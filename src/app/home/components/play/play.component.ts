import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/core/service/films/films.service';
import { Film } from 'src/app/interface/film.interface';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  resultsSearch: any[] = []
  public videoDefault = null;


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

  agregarFavorito(filmUrl) {
    console.log('%cConectar con la función', 'color: yellow');
    alert("Falta conectar con la función");
  }


  public films: Film[];
  public recorrido: number;

  constructor(private service: FilmsService) {
    this.recorrido = 1;
    this.getSearch()
  }

  ngOnInit(): void {
    this.getFilms();
  }

  getSearch() {
    this.service.$ConecctionSearch.subscribe((data: any) => {
      console.log("Datos del search en home", data)
      this.resultsSearch = data.results
      const statusSearch = document.getElementById('resultado')
      statusSearch.style.display = 'block'
    })
  }

  getFilms() {
    this.service.getFilms().subscribe((res: any) => {
      console.log(res);
      this.films = res.films;
      console.log(res.films.url);

      /*
switch (res.statusCode) {
        case 400:
          Swal.fire({
            icon: "error",
            text: "No hay videos registrados",
          });
          break;
        case 200:
          console.log('Listado de videos');
          this.films = res.films;
          console.log(res.films.url);
          break;
        case 500:
          console.log('Error de conexión');
          break;
      }
      */

    });
  }


}
