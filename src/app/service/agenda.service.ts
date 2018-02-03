import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AgendaService {

  private agendaApiUrl: string = "http://localhost:8080/rest/pessoas.json";

  constructor(private http: HttpClient) { }

  getLista() {
    return this.http.get<Object>(`${this.agendaApiUrl}`)
  }

}
