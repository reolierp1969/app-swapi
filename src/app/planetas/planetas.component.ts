import { Component, OnInit } from '@angular/core';
import { PlanetasService} from './planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  
  planetas : any[] = [];
  nombre='';
  rotacion='';
  periodo='';
  diametro='';
  clima='';
  gravedad='';
  terreno='';
  sagua='';
  poblacion='';

  constructor(protected planetasService: PlanetasService) { }

  ngOnInit(){
    //Llenamos la matriz con la informacion de los planetas del objeto json
    this.planetasService.getPlanetas()
    .subscribe(
      (data) => { // Success
        this.planetas = data['results'];
        
      },
      (error) => {
        console.error(error);
      } 
    );
  }

  seleccionaPlaneta(nombre)
  {
    for(var x = 0; x < this.planetas.length; x++)
    {
      if(this.planetas[x].name==nombre)
      {
        this.nombre=this.planetas[x].name;
        this.rotacion=this.planetas[x].rotation_period;
        this.periodo=this.planetas[x].orbital_period;
        this.diametro=this.planetas[x].diamete;
        this.clima=this.planetas[x].climate;
        this.gravedad=this.planetas[x].gravity;
        this.terreno=this.planetas[x].terrain;
        this.sagua=this.planetas[x].surface_water;
        this.poblacion=this.planetas[x].population;
       
      }
    }
  }



}
