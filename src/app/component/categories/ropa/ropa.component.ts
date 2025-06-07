import { Component } from '@angular/core';

@Component({
  selector: 'app-ropa',
  standalone: true,
  imports: [],
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent {
  ropa = [
    { nombre: 'Camiseta básica', descripcion: 'Camiseta de algodón suave, ideal para uso diario.' },
    { nombre: 'Pantalón vaquero', descripcion: 'Jeans clásicos de corte recto y color azul.' },
    { nombre: 'Chaqueta deportiva', descripcion: 'Chaqueta ligera y cómoda para actividades al aire libre.' }
  ];
}
