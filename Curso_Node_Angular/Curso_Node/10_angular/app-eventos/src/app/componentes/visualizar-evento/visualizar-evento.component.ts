import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Evento } from 'src/app/interfaces/evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-visualizar-evento',
  templateUrl: './visualizar-evento.component.html',
  styleUrls: ['./visualizar-evento.component.css']
})
export class VisualizarEventoComponent implements OnInit {

  constructor(
    private service: EventosService,
    private route: ActivatedRoute  ) { }

  evento: Evento;

  ngOnInit(): void {
    //ActivateRoute: fornece informações sobre a rota atualmente em uso
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getEvento(id).subscribe(resposta => {
      this.evento = resposta;
    });

  }

}
