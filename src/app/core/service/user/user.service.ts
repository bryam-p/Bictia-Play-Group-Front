import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  postProfile(id:string, user:any){
    return this.http.post<any>(`${this.url}/api/user/addProfile/${id}`, user )
  }
}
