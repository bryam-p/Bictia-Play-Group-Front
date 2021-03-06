import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user/user.service';
import { User } from 'src/app/interface/user.interface';
import swal from 'sweetalert2'
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alertSweet: string = ''

  constructor(private userService: UserService,
    private router: Router) {

  }

  UserHTML: any = {
    name: '',
    email: '',
    password: '',
    birthday: new Date,
    profiles: [{}]
  }

  ngOnInit(): void {

  }

  loginUser() {
    this.userService.postUser(this.UserHTML).subscribe((data: any) => {

      if (data.statusCode === 200) {
        localStorage.setItem('data', data.dataUser.email)
        localStorage.setItem('name', data.dataUser.name)
        localStorage.setItem('role', data.dataUser.role )
        localStorage.setItem('id', data.dataUser._id)
        console.log(data)

        swal.fire(`Bienvenido ${this.UserHTML.email}`, this.alertSweet, 'success')
        this.router.navigate(['/elegirPerfil'])

        console.log(data)
      } else {
        swal.fire(data.message, this.alertSweet, 'warning')
        console.log(data)
      }

    })
  }

}
