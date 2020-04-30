import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private userService: UserService) { 
    this.getFavorites()
  }

  ngOnInit(): void {
  }

  getFavorites(){ //Se suscribe al servicio
    let id = localStorage.getItem('id')
    this.userService.getFavorite(id).subscribe((data:any)=>{
      console.log(data)
    })
  }
}
