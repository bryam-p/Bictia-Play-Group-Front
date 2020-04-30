import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  $elegirPerfil = new EventEmitter<any>()

  constructor(private http: HttpClient) {
  }

  private url = 'http://localhost:3000'

  postUser(user: User) {
    return this.http.post<any>(`${this.url}/api/user/login`, user);
  }

  registerPost(user: User) {
    return this.http.post(`${this.url}/api/user/create`, user)
  }

  loggedIn() {
    if (localStorage.getItem('data')) {
      return true
    } else {
      return false
    }
  }

  postProfile(id: string, user: any) {
    return this.http.post<any>(`${this.url}/api/user/addProfile/${id}`, user)

  }

  getProfile(id: string) {
    return this.http.get<any>(`${this.url}/api/user/getProfiles/${id}`)
  }

  getFavorite(id: string) {
    return this.http.get<any>(`${this.url}/api/user/favoriteFilms/${id}`)
  }

  addFavorite(id, movieId, profileName) {
    console.log("Agregar a favoritos");
    return this.http.put<any>(`${this.url}/api/user/addFavorite/${id}`, { name: profileName, filmId: movieId })
  }

  delFavorite(id, movieId, profileName) {
    console.log("Eliminar de favoritos");
    return this.http.put<any>(`${this.url}/api/user/delFavorite/${id}`, { name: profileName, filmId: movieId })
  }
}
