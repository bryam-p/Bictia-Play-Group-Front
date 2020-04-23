import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cerrarVideo() {
    // Función para cerrar el reproductor del video
    const reproductor = document.getElementById('reproductor');
    reproductor.classList.toggle('mostrarVideo');
  }

  abrirVideo() {
    // Función para cerrar el reproductor del video
    const reproductor = document.getElementById('reproductor');
    reproductor.classList.toggle('mostrarVideo');
  }

  constructor() { }

  ngOnInit(): void {
  }

}


