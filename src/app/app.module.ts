import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonajesComponent} from './personajes/personajes.component';
import { PeliculasComponent} from './peliculas/peliculas.component';
import { NavesespacialesComponent} from './navesespaciales/navesespaciales.component';
import { VehiculosComponent} from './vehiculos/vehiculos.component';
import { EspeciesComponent} from './especies/especies.component';
import { PlanetasComponent} from './planetas/planetas.component';
// import { PersonajesModule} from './personajes/personajes.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PeliculasComponent,
    NavesespacialesComponent,
    VehiculosComponent,
    EspeciesComponent,
    PlanetasComponent
  ],
  imports: [
    BrowserModule
    //PersonajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
