import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/core/service/films/films.service';
import { Film } from 'src/app/interface/film.interface';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public search:any={
    name:''
  }

  constructor(private filmsService: FilmsService) { 
    console.log(this.search)
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

}
