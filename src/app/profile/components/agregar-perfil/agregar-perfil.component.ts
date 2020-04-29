import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-agregar-perfil',
  templateUrl: './agregar-perfil.component.html',
  styleUrls: ['./agregar-perfil.component.css']
})
export class AgregarPerfilComponent implements OnInit {


  profile:any={
    name:'',
    avatarUrl: '',
    birthday: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  postProfile(){
    let id = localStorage.getItem('id')
    this.userService.postProfile(id, this.profile).subscribe((data:any)=>{
      console.log(data)
    })
  }

  getUrl(url:string){
    console.log(url)
    this.profile.avatarUrl = 'n'
    if(url == '1'){
      this.profile.avatarUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwgcj3Khz9ddl3J3bPKtZEeaQ-Ivp4NJ-u98OlHT5ktrK_G6xy&usqp=CAU'
    }
    console.log(this.profile.avatarUrl)
  }
}
