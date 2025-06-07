import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes
import { AccesoriosComponent } from './component/categories/accesorios/accesorios.component';
import { ArticulosComponent } from './component/categories/articulos/articulos.component';
import { RopaComponent } from './component/categories/ropa/ropa.component';
import { ChatComponent } from './component/chat/chat.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
const routes: Routes = [
  { path: '',redirectTo:"login", pathMatch: "full"},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ropa', component: RopaComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: '**', redirectTo: '/login' }, // Ruta para errores (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
