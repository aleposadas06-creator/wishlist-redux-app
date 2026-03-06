import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapa.html',
  styleUrl: './mapa.css'
})
export class Mapa {

  mostrarMensaje(){
    alert('Marker seleccionado');
  }

}