import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { PeliculasService} from './peliculas.service';


@NgModule({
  declarations: [PeliculasComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [PeliculasService]
})
export class PeliculasModule { }
