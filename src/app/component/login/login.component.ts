import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private readonly auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login(this.email, this.password)
      .then(() => this.router.navigate(['/inicio']))
      .catch(error => alert(error.message));
  }
}