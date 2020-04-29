import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/core/service/films/films.service';
import { Film } from 'src/app/interface/film.interface';
import { UserService } from 'src/app/core/service/user/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user 

  public search:any={
    name:''
  }

  constructor(private filmsService: FilmsService, private userServices: UserService) { 
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
