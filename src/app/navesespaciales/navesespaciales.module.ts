import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesespacialesComponent } from './navesespaciales.component';
import { NavesespacialesService} from './navesespaciales.service';



@NgModule({
  declarations: [NavesespacialesComponent],
  imports: [
    CommonModule
    
  ],
  providers: [NavesespacialesService]
})
export class NavesespacialesModule { }
