import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = "http://localhost:8080/oportunidades"

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get<any>(this.apiUrl);
  }

  adicionar(oportunidade){
    return this.httpClient.post<any>(this.apiUrl, oportunidade);
  }
}
