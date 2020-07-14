import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';

@Component({
  selector: 'app-remover-evento',
  templateUrl: './remover-evento.component.html',
  styleUrls: ['./remover-evento.component.css']
})
export class RemoverEventoComponent implements OnInit {

  constructor(
    private service: EventosService,
    private route: ActivatedRoute,
    private router: Router) { }

  evento: Evento;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getEvento(id).subscribe(resposta => {
      this.evento = resposta;
    });
  }

  remover(id: string): void {
    this.service.deleteEvento(id)
      .subscribe(() => {
        this.router.navigate(['/eventos']);
      });
  }

}
