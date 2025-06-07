import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  usuario = {
    nombre: 'Juan Pérez',
    correo: 'juan.perez@example.com',
    telefono: '+1234567890'
  };

  editarPerfil() {
    alert('Funcionalidad para editar perfil en desarrollo.');
  }
}
