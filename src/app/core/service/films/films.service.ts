import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from 'src/app/interface/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient){
  }

  getFilms(){
    return this.http.get<any>(`${this.url}/api/film/`).pipe(res => res);
  }

}
