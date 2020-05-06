import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(protected http: HttpClient) { }

  getVehiculos(){
    return this.http.get('https://swapi.py4e.com/api/vehicles/');
  }
}
