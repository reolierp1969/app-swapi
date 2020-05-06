import { Component, OnInit } from '@angular/core';
import { NavesespacialesService} from './navesespaciales.service';

@Component({
  selector: 'app-navesespaciales',
  templateUrl: './navesespaciales.component.html',
  styleUrls: ['./navesespaciales.component.css']
})
export class NavesespacialesComponent implements OnInit {
  
  naves: any[] =[];
  nave='';
  nombre='';
  modelo='';
  fabricante='';
  costo='';
  longitud='';
  velocidad='';
  tripulacion='';
  pasajeros='';
  carga='';
  consumibles='';
  rata='';
  mglt='';
  clase='';

  constructor(protected navesespacialesService: NavesespacialesService) { }

  ngOnInit(){ 
    //Llenamos la matriz con la informacion de los planetas del objeto json
    this.navesespacialesService.getNaves()
    .subscribe(
      (data) => { // Success
        this.naves = data['results'];
        
      },
      (error) => {
        console.error(error);
      } 
    ); 
  }
  seleccionaNaveEspacial(nombre)
  {
    for(var x = 0; x < this.naves.length; x++)
    {
      if(this.naves[x].name==nombre)
      {
        this.nombre=this.naves[x].name;
        this.modelo=this.naves[x].model;
        this.fabricante=this.naves[x].manufacturer;
        this.costo=this.naves[x].cost_in_credits;
        this.longitud=this.naves[x].length;
        this.velocidad=this.naves[x].max_atmosphering_speed;
        this.tripulacion=this.naves[x].crew;
        this.carga=this.naves[x].cargo_capacity;
        this.consumibles=this.naves[x].consumables;
        this.rata=this.naves[x].hyperdrive_rating;
        this.mglt=this.naves[x].MGLT;
        this.clase=this.naves[x].starship_class;
      }
    }
  }
}