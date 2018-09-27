import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { formatNumber } from '@angular/common';


const config = { headers : new HttpHeaders( {token : localStorage.getItem("token")} ) };


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpClient) {}

  sinToken()
  {
    return this.http.get('http://192.168.2.57:3000/sintoken');
  }

  Token()
  { //(url, param, objConfigs)
    return this.http.post('http://192.168.2.57:3000/token', {user : { nombre:"pepe", nivel:2, at:"1000" }});
  }

  LogInToken(usuario, clave)
  {
    return this.http.post('http://192.168.2.57:3000/token', {user : { usuario:usuario, clave:clave }});
  }

  Listado()
  {
    return this.http.get('http://192.168.2.57:3000/listado', config);
  }


}
