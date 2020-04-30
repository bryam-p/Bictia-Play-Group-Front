import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/core/service/films/films.service';
import { Film } from 'src/app/interface/film.interface';
<<<<<<< HEAD
import { DefaultValueAccessor } from '@angular/forms';
=======
import { UserService } from 'src/app/core/service/user/user.service';
>>>>>>> 8d6b0d97fe7fb4742ca505974606253725648270



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  changeName:any = {
    name: localStorage.getItem('name'),
    role: localStorage.getItem('role')
  }
  public search:any = {
    name: ''

  }

  constructor(private filmsService: FilmsService) {
    console.log(this.search)
    this.getNameProfile()
  }

  ngOnInit(): void {

  }

  logout(){
    localStorage.clear();
  }

  gbusqueda(){
    console.log(this.search)
  }

  getSearch(){

    this.filmsService.getSearch(this.search.name).subscribe((data:any)=>{
     // this.SearchHTML = data
      console.log(this.search.name)
      console.log("data en header--->",data)
      this.filmsService.$ConecctionSearch.emit(data)

    })

  }

  getNameProfile(){
    this.userServices.$elegirPerfil.subscribe((data:any)=>{
      console.log("nombre", data)
      this.user = data
    })
  }

}
