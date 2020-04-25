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

  constructor(private userService: UserService,
    private router: Router) {

  }

  alertSweet: string = ''


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
        swal.fire(`Bienvenido ${this.UserHTML.email}`, this.alertSweet, 'success')
        this.router.navigate(['/home'])

        console.log(data)
      } else {
        swal.fire(data.menssage, this.alertSweet, 'warning')
        console.log(data.menssage)
      }

    })
  }


}
