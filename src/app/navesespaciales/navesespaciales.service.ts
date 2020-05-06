import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavesespacialesService {

  constructor(protected http: HttpClient) { }

  getNaves(){
    return this.http.get('https://swapi.py4e.com/api/starships/');
  }
}

