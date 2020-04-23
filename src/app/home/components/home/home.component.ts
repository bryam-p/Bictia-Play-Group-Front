import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  const reproductor = document.getElementById('reproductor');
  const videoYoutube = document.getElementById('videoYoutube');

  cerrarVideo() {
    // Función para cerrar el reproductor del video
    reproductor.classList.toggle('mostrarVideo');
    videoYoutube.setAttribute('src', 'https://www.youtube.com/embed/FRbV0nKN_ss');

  }

  abrirVideo() {
    // Función para cerrar el reproductor del video
    videoYoutube.setAttribute('src', 'https://www.youtube.com/embed/FRbV0nKN_ss');
    reproductor.classList.toggle('mostrarVideo');

  }

  constructor() { }

  ngOnInit(): void {
  }

}


