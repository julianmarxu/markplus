import { Component } from '@angular/core';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordResetComponent {
  email: string = '';

  resetPassword() {
    const auth = getAuth();
    sendPasswordResetEmail(auth, this.email)
      .then(() => {
        alert('Se ha enviado un enlace de recuperación a tu correo.');
      })
      .catch((error) => {
        console.error(error);
        alert('Hubo un error al enviar el correo. Verifica el correo ingresado.');
      });
  }
}
