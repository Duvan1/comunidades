import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonasComponent } from './personas/personas.component';
import { CarnetsComponent } from './carnets/carnets.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { DataTableModule} from "angular2-datatable";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GestionarcarnetsComponent } from './gestionarcarnets/gestionarcarnets.component';
import { GestionarusuariosComponent } from './gestionarusuarios/gestionarusuarios.component';
import { AjustesComponent } from './ajustes/ajustes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    InicioComponent,
    PersonasComponent,
    CarnetsComponent,
    DataFilterPipe,
    GestionarcarnetsComponent,
    GestionarusuariosComponent,
    AjustesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
