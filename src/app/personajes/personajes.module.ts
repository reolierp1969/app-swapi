import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { PersonajesService} from './personajes.service';
import { PersonajesComponent } from './personajes.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [PersonajesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [PersonajesService]
})
export class PersonajesModule { }
