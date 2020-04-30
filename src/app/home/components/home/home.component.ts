import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interface/film.interface';
import { FilmsService } from 'src/app/core/service/films/films.service';
import swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from 'src/app/core/service/user/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultsSearch:any[]=[]
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

  agregarFavorito(filmUrl) {
    console.log('%cConectar con la función', 'color: yellow');
    alert("Falta conectar con la función");
  }


  public films: Film[];
  public recorrido: number;

  constructor(private service: FilmsService, private userService:UserService) {
    this.recorrido = 1;
    this.getSearch()
  }

  ngOnInit(): void {
    this.getFilms();
  }

  getSearch(){
    this.service.$ConecctionSearch.subscribe((data:any)=>{
      console.log("Datos del search en home",data)
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

  addFavorite(videoId){
    const id = localStorage.getItem('id');
    const name = localStorage.getItem('profileName');
    this.userService.addFavorite(id, videoId, name).subscribe((data:any)=>{
      console.log(data)
      // if(data.statusCode === 200) {
      //   alert("Agregado de favoritos");
      // } else {
      //   alert("Algo salio mal");
      // }
      swal.fire({
        title: `Se agrego a favoritos correctamente`,
        icon: 'success'
      })

    })
  }

}
