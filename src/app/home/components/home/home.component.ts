import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interface/film.interface';
import { FilmsService } from 'src/app/core/service/films/films.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public films: Film[];

  constructor(private service: FilmsService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(){
    this.service.getFilms().subscribe((res: any) => {
      console.log(res);
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
        default:
          console.log('Error de conexión');
          break;
      }
    });
  }

}
