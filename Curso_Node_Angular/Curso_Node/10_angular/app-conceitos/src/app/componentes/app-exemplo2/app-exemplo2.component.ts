import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './app-exemplo2.component.html',
  styleUrls: ['./app-exemplo2.component.css']
})
export class AppExemplo2Component  {
  //Exemplo de Property Binding, 
  //um tipo de Binding Unidirecional (componente -> view)

  rnd: number = Math.random();
  imagem: string = "http://lorempixel.com/400/200/business";

}
