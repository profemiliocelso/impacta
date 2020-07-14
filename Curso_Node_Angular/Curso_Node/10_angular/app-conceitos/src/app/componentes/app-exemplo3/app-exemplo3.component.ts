import { Component, OnInit } from '@angular/core';
import { AppServiceService } from "../../services/app-service.service";


@Component({
  selector: 'event-binding',
  templateUrl: './app-exemplo3.component.html',
  styleUrls: ['./app-exemplo3.component.css']
})
export class AppExemplo3Component implements OnInit {
  
  //O construtor é um tipo especial de função, executada quando o componente é 
  //criado. Sua principal tarefa é receber objetos através de injeção de dependencia
  constructor(service: AppServiceService) { 
    this.topicos = service.getTopicos();
   }

  topicos: string[];


  //A função ngOnInit() será sempre chamada quando o componente for iniciado.
  ngOnInit(): void {
    this.escola = "Impacta";
  }

  escola: string;

  mostrarTexto(): void {
    this.escola = "Impacta Tecnologia";
  }
}
