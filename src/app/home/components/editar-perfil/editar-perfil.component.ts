import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  profiles:any[] = []
  public nickname = ''

  constructor(private userService: UserService, private router:Router) { 
    this.getProfile()
  }

  ngOnInit(): void {
  }

  getProfile(){
    let id = localStorage.getItem('id')
    this.userService.getProfile(id).subscribe((data:any)=>{
      console.log(data)
      this.profiles = data.user.profiles;
    })
  }

  getNickname(name:string){
    console.log(name)
    this.nickname = name
  }
}
