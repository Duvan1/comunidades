import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PersonasComponent } from './personas/personas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { CarnetsComponent } from './carnets/carnets.component';
import { GestionarcarnetsComponent } from './gestionarcarnets/gestionarcarnets.component';
import { GestionarusuariosComponent } from './gestionarusuarios/gestionarusuarios.component';
import { AjustesComponent } from './ajustes/ajustes.component';

const routes: Routes = [
  	{path: 'login', component: LoginComponent},
  	{path: 'inicio', component: InicioComponent},
  	{path: 'personas', component: PersonasComponent},
  	{path: 'carnets', component: CarnetsComponent},
  	{path: 'gestionarcarnets', component: GestionarcarnetsComponent},
  	{path: 'gestionarusuarios', component: GestionarusuariosComponent},
  	{path: 'ajustes', component: AjustesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
