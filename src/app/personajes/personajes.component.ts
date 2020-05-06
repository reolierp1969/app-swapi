import { Component, OnInit } from '@angular/core';
import { PersonajesService} from './personajes.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: any[] = [];
  filtrado: any[] = [];
  selected: any[] =[];
  planetas: any[] =[];
  peliculas: any[] =[];
  naves: any[] =[];

  nombre='';
  estatura='';
  peso='';
  color_cabello='';
  color_piel='';
  color_ojos='';
  nacimiento='';
  sexo='';
  casa='';
  pelicula='';
  nave='';

  constructor(
    protected personajesService: PersonajesService
  ) {

   }

  ngOnInit(){
    
    this.personajesService.getPersonajes()
    .subscribe(
      (data) => { // Success
        this.personajes = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
    //alert(this.nombre); 
    this.personajesService.getPlanetas()
    .subscribe(
      (data) => { // Success
        this.planetas = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
    //
    this.personajesService.getPeliculas()
    .subscribe(
      (data) => { // Success
        this.peliculas = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
    //
    this.personajesService.getNaves()
    .subscribe(
      (data) => { // Success
        this.naves = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
  }
  
  seleccionalo(nombre)
  {
    
    for(var x=0;x<this.personajes.length;x++)
    { 
    if (this.personajes[x].name==nombre)
      {
        this.estatura=this.personajes[x].height;
        this.peso=this.personajes[x].mass;
        this.color_cabello=this.personajes[x].hair_color;
        this.color_piel=this.personajes[x].skin_color;
        this.color_ojos=this.personajes[x].eye_color;
        this.nacimiento=this.personajes[x].birth_year;
        this.sexo=this.personajes[x].gender;
        
        for(var y=0; y<this.planetas.length; y++)
        {
           
           var k=this.planetas[y].residents.length;
           console.log(k);
           for(var i=0; i<this.planetas[y].residents.length;i++)
           {
              if (this.planetas[y].residents[i]==this.personajes[x].url)
              {
                this.casa=this.planetas[y].name; 
              }  
           }  
        }  
        this.pelicula='';
        for(var z=0; z<this.peliculas.length; z++)
        {
          for(var j=0; j<this.peliculas[z].characters.length;j++)
          {
            if (this.peliculas[z].characters[j]==this.personajes[x].url)
            {
              this.pelicula=  this.pelicula + ' -- ' + this.peliculas[z].title + ' -- ' 
            } 
          }   
        }
        this.nave='';
        //
        for(var t=0; t<this.naves.length; t++)
        {
          for(var l=0; l<this.naves[t].pilots.length;l++)
          {
            if (this.naves[t].pilots[l]==this.personajes[x].url)
            {
              this.nave= '**' +  this.nave + this.naves[t].name + '**'  
            } 
          }  
        }
        //
      } 
    }
  }

}
