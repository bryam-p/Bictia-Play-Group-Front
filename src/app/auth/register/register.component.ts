import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/core/service/user/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alertSweet: string = ''

  user: any = {
    name: '',
    email: '',
    password: '',
    birthday: new Date
  }


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.registerPost(this.user).subscribe((data: any) => {
      if (data.statusCode === 200) {
        swal.fire(`Bienvenido ${this.user.name}`, this.alertSweet, 'success')
        this.router.navigate(['/auth/login'])
      } else {
        swal.fire(data.err, this.alertSweet, 'warning')
      }
      console.log(data)

    })
  }

}
