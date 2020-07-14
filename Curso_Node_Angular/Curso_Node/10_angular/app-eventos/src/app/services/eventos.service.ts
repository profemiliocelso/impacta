import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Evento } from "../interfaces/evento";

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3200/eventos";

  //método que recebe a lista de eventos do webservice
  public getListaEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url);
  }

  //método que busca um evento com base no seu id
  public getEvento(id: string): Observable<Evento> {
    const novoUrl = `${this.url}/${id}`;
    return this.http.get<Evento>(novoUrl);
  }

  //método que envia um objeto para o webservice, para incluí-lo
  public postEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.url, evento);
  }

  //método que altera um evento no webservice
  public putEvento(evento: Evento) : Observable<Evento>{
    const novoUrl = `${this.url}/${evento._id}`;
    return this.http.put<Evento>(novoUrl, evento);
  }
  
  //método que remove um evento no webservice
  public deleteEvento(id: string): Observable<Evento>{
    const novoUrl = `${this.url}/${id}`;
    return this.http.delete<Evento>(novoUrl);
  }
}
