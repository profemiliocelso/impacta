import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Evento } from 'src/app/interfaces/evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: ['./novo-evento.component.css']
})
export class NovoEventoComponent implements OnInit {

  constructor(
    private service: EventosService,
    private router: Router) { }


  evento: Evento;

  ngOnInit(): void {
    this.evento = { descricao: '', data: '', preco: 0 };
  }


  //eventos dos botões Incluir e Cancelar, respectivamente
  incluir(evento: Evento): void {
    this.service.postEvento(evento).subscribe(() => {
      this.router.navigate(['/eventos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/eventos']);
  }

}
