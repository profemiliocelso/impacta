import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Evento } from 'src/app/interfaces/evento';

import * as moment from 'moment';

@Component({
  selector: 'app-alterar-evento',
  templateUrl: './alterar-evento.component.html',
  styleUrls: ['./alterar-evento.component.css']
})
export class AlterarEventoComponent implements OnInit {

  constructor(
    private service: EventosService,
    private route: ActivatedRoute,
    private router: Router) { }


  evento: Evento;
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getEvento(id).subscribe(resposta => {
      this.evento = resposta;
      this.evento.data = moment(resposta.data).format('YYYY-MM-DD');
    });
  }

  alterar(evento: Evento): void {
    this.service.putEvento(evento).subscribe(() => {
      this.router.navigate(['/eventos']);  
    });
  }

  cancelar() : void {
    this.router.navigate(['/eventos']);
  }

}
