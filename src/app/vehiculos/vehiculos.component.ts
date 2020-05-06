import { Component, OnInit } from '@angular/core';
import { VehiculosService} from './vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: any[] = [];

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
  calificacion='';
  mglt='';
  clase='';

  constructor(protected vehiculosService: VehiculosService) { }

  ngOnInit(){
    this.vehiculosService.getVehiculos()  
    .subscribe(
      (data) => { // Success
        this.vehiculos = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
  }

  seleccionaVehiculo(nombre)
  {
    for(var x = 0; x < this.vehiculos.length; x++)
    {
      if(this.vehiculos[x].name==nombre)
      {
        this.nombre=this.vehiculos[x].name;
        this.modelo=this.vehiculos[x].model;
        this.fabricante=this.vehiculos[x].manufacturer;
        this.costo=this.vehiculos[x].cost_in_credits;
        this.longitud=this.vehiculos[x].length;
        this.velocidad=this.vehiculos[x].max_atmosphering_speed;
        this.tripulacion=this.vehiculos[x].crew;
        this.pasajeros=this.vehiculos[x].passengers;
        this.carga=this.vehiculos[x].cargo_capacity;
        this.consumibles=this.vehiculos[x].consumables;
        this.calificacion=this.vehiculos[x].cargo_capacity;
        this.clase=this.vehiculos[x].vehicle_class;
      }
    }
  }

}
