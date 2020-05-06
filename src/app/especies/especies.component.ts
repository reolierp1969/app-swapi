import { Component, OnInit } from '@angular/core';
import { EspeciesService} from './especies.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  especies: any[] = [];

  nombre='';
  clasificacion='';
  designacion='';
  estatura='';
  piel='';
  cabello='';
  ojos='';
  pvida='';
  idioma='';

  constructor(protected especiesService: EspeciesService) { }

  ngOnInit(){
    this.especiesService.getEspecies()
    .subscribe(
      (data) => { // Success
        this.especies = data['results'];
        
      },
      (error) => {
        console.error(error);
      } 
    );
  }

  seleccionaEspecie(nombre)
  {
    for(var x = 0; x < this.especies.length; x++)
    {
      if(this.especies[x].name==nombre)
      {
        this.nombre=this.especies[x].name;
        this.clasificacion=this.especies[x].classification;
        this.designacion=this.especies[x].designation;
        this.estatura=this.especies[x].average_heights;
        this.piel=this.especies[x].skin_colors;
        this.cabello=this.especies[x].hair_color;
        this.ojos=this.especies[x].eye_colors;
        this.pvida=this.especies[x].average_lifespan;
        this.idioma=this.especies[x].language;
       
      }
    }
  }

}
