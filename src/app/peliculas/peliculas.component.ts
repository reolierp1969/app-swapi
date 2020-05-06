import { Component, OnInit } from '@angular/core';
import { PeliculasService} from './peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  
  planetas: any[] =[];
  peliculas: any[] =[];
  naves: any[] =[];
  personajes: any[] = [];
  vehiculos: any[] = [];

  titulo='';
  episodio='';
  resumen='';
  director='';
  productor='';
  rfecha='';
  actores='';
  planeta='';
  nave='';
  vehiculo='';
  especie='';
  pelicula='';
  personaje='';

  constructor(protected peliculasService: PeliculasService) { }

  ngOnInit(){
    
    this.peliculasService.getPersonajes()
    .subscribe(
      (data) => { // Success
        this.personajes = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
    //alert(this.nombre); 
    this.peliculasService.getPlanetas()
    .subscribe(
      (data) => { // Success
        this.planetas = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
    //
    this.peliculasService.getPeliculas()
    .subscribe(
      (data) => { // Success
        this.peliculas = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
    //
    this.peliculasService.getNaves()
    .subscribe(
      (data) => { // Success
        this.naves = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
    //
    this.peliculasService.getVehiculos()
    .subscribe(
      (data) => { // Success
        this.vehiculos = data['results'];
        
      },
      (error) => {
        console.error(error);
      }
      
    );
    //
  }
  
  seleccionalo(title)
  {
    
    for(var x=0;x<this.peliculas.length;x++)
    { 
    if (this.peliculas[x].title==title)
      {
        this.titulo=this.peliculas[x].title;
        this.episodio=this.peliculas[x].episode_id;
        this.director=this.peliculas[x].director;
        this.productor=this.peliculas[x].producer;
        this.rfecha=this.peliculas[x].release_date;
        this.resumen=this.peliculas[x].opening_crawl;
        this.planeta='';
        for(var y=0; y<this.planetas.length; y++)
        {
           for(var i=0; i<this.planetas[y].films.length;i++)
           {
              if (this.planetas[y].films[i]==this.peliculas[x].url)
              {
                this.planeta=this.planeta + this.planetas[y].name + ' '; 
              }  
           }  
        }  

        this.personaje='';
        for(var z=0; z<this.personajes.length; z++)
        {
          
          for(var j=0; j<this.personajes[z].films.length;j++)
          {
            
            if (this.personajes[z].films[j]==this.peliculas[x].url)
            {
              this.personaje=  this.personaje + ' -- ' + this.personajes[z].name + ' -- ' 
            } 
          }   
        }
        this.nave='';
        //
        for(var t=0; t<this.naves.length; t++)
        {
          for(var l=0; l<this.naves[t].films.length;l++)
          {
            if (this.naves[t].films[l]==this.peliculas[x].url)
            {
              this.nave=  this.nave + this.naves[t].name + '**'  
            } 
          }  
        }
        //
        
      } 
    }
  }

}
