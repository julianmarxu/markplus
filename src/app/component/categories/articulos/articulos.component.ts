import { Component } from '@angular/core';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {
  articulos = [
    { titulo: 'Lámpara de escritorio', descripcion: 'Lámpara LED ajustable para oficina o estudio.' },
    { titulo: 'Silla ergonómica', descripcion: 'Silla cómoda con soporte lumbar.' },
    { titulo: 'Mochila resistente', descripcion: 'Mochila grande con varios compartimentos.' }
  ];
}
