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
    videoYoutube.setAttribute('src', 'https://www.youtube.com/embed/UXujYNnPEsM');
    console.log("Se cerró el video");

  }

  abrirVideo() {
    // Función para cerrar el reproductor del video
    videoYoutube.setAttribute('src', 'https://www.youtube.com/embed/UXujYNnPEsM');
    reproductor.classList.toggle('mostrarVideo');

  }

  constructor() { }

  ngOnInit(): void {
  }

}


