import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from 'src/app/interface/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  $ConecctionSearch = new EventEmitter<any>()

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient){
  }

  getFilms(){
    return this.http.get<any>(`${this.url}/api/film/`);
  }

  getSearch(name:string){
    console.log(name)
    return this.http.get<any>(`${this.url}/api/film/typehead?name=${name}`)
  }
}
