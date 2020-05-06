import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  constructor(protected http: HttpClient) { }

  getEspecies(){
    return this.http.get('https://swapi.py4e.com/api/species/');
  }
}
