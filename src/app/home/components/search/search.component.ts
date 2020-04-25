import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interface/film.interface';
import { FilmsService } from 'src/app/core/service/films/films.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private films: Film[];

  constructor( private service: FilmsService ) { }

  ngOnInit(): void {
  }

}
