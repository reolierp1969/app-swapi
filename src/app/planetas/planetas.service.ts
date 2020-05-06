import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(protected http:HttpClient) { }

  getPlanetas(){
    return this.http.get('https://swapi.py4e.com/api/planets/');
  }
}
