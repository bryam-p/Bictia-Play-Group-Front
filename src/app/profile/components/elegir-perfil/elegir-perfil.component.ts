import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-elegir-perfil',
  templateUrl: './elegir-perfil.component.html',
  styleUrls: ['./elegir-perfil.component.css']
})
export class ElegirPerfilComponent implements OnInit {

  profiles:any[] = []

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

  getId(id:string, nombre: string){
    console.log(id)
    localStorage.setItem('profile', id)
    localStorage.setItem('profileName', nombre)
    swal.fire({
      title: `Bienvenido(a) ${nombre}`,
      icon: 'success'
    })
    this.userService.$elegirPerfil.emit(`${nombre}`)
    this.router.navigate(['/home/home'])
  }

}
