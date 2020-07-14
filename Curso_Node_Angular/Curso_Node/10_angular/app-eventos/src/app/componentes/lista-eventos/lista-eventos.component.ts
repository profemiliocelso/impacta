import { Component, OnInit } from '@angular/core';
import { Evento } from "../../interfaces/evento";
import { EventosService } from "../../services/eventos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  constructor(
    private service: EventosService, 
    private router: Router) { }

  eventos: Evento[];

  ngOnInit(): void {
    this.service.getListaEventos()
      .subscribe(resposta => this.eventos = resposta);
  }

  incluirEvento(): void {
    this.router.navigate(['/eventos/novo']);
  }

}
