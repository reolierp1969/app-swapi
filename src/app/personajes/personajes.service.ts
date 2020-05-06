import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(protected http: HttpClient) { }

  getPersonajes() {
    return this.http.get('https://swapi.py4e.com/api/people/');
  }
  
  getPlanetas() {
    return this.http.get('https://swapi.py4e.com/api/planets/');
  }
  
  getPeliculas(){
    return this.http.get('https://swapi.py4e.com/api/films/');
  }

  getNaves(){
    return this.http.get('https://swapi.py4e.com/api/starships/');
  }


}
