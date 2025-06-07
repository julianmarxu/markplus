import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensajes: { usuario: string, texto: string }[] = [
    { usuario: 'Juan', texto: '¡Hola! ¿Cómo estás?' },
    { usuario: 'María', texto: 'Bien, gracias. ¿Y tú?' },
    { usuario: 'Juan', texto: 'Estoy genial. ¿Qué planes tienes hoy?' }
  ];

  nuevoMensaje: string = '';

  enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.mensajes.push({ usuario: 'Tú', texto: this.nuevoMensaje });
      this.nuevoMensaje = '';
    }
  }
}
