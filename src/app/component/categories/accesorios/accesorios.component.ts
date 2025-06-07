import { Component } from '@angular/core';

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [],
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent {
  accesorios = [
    { nombre: 'Collar de perlas', descripcion: 'Un elegante collar de perlas blancas.' },
    { nombre: 'Bolso de cuero', descripcion: 'Bolso hecho a mano con cuero auténtico.' },
    { nombre: 'Reloj clásico', descripcion: 'Reloj de pulsera con correa de cuero y esfera dorada.' }
  ];
}
