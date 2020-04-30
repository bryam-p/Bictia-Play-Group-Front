import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/core/service/films/films.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  alertSweet: string = ''

    film: any = {
        name: '',
        category: '',
        type: 'Kids',
        url: '',
        urlImage: '',
        createDate: Date.now,
        createBy: localStorage.getItem('name')
  }

  constructor(private filmsService: FilmsService, private router: Router) { }

  ngOnInit(): void {
  }

createFilm() {
    this.filmsService.postFilm(this.film).subscribe((data: any) => {
      if (data.satatusCode ===200){
        swal.fire(`Video agregado exitosamente`, this.alertSweet, 'success')
      } else {
        swal.fire( data.err, this.alertSweet, 'warning')
      }
      console.log(data)
    })
}

}
