import { Routes } from '@angular/router';
import { AccesoriosComponent } from './component/categories/accesorios/accesorios.component';
import { ArticulosComponent } from './component/categories/articulos/articulos.component';
import { RopaComponent } from './component/categories/ropa/ropa.component';
import { ChatComponent } from './component/chat/chat.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'ropa', component: RopaComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'accesorios', component: AccesoriosComponent },
];
