import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/core/service/films/films.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  alertSweet: string = ''

  filmForm: FormGroup


  film: any = {
    name: '',
    category: '',
    type: 'Kids',
    url: '',
    urlImage: '',
    createDate: Date.now,
    createBy: localStorage.getItem('name')
  }

  constructor(private filmsService: FilmsService, private router: Router, private builder: FormBuilder) {


    this.filmForm = this.builder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      url: ['', Validators.required],
      urlImage: ['', Validators.required]
    })
  }



  ngOnInit(): void {
  }

  createFilm() {
    this.filmsService.postFilm(this.film).subscribe((data: any) => {

      swal.fire(`Video agregado exitosamente`, this.alertSweet, 'success')
      this.router.navigate(['/home/home'])
      console.log(data)
    })
  }

}
