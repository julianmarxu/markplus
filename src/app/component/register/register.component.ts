import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';

  constructor(private router: Router) {}

  registrarUsuario() {
    if (this.nombre && this.correo && this.telefono) {
      // Aquí implementarías la lógica para registrar en Firebase
      console.log('Datos de registro:', {
        nombre: this.nombre,
        correo: this.correo,
        telefono: this.telefono
      });

      // Después del registro exitoso, redirigir a la pantalla de login o chat
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
