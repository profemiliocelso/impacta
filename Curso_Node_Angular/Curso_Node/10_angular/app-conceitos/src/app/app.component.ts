import { Component } from '@angular/core';

@Component({
  selector: 'app-root',               //tag a ser chamada na view
  templateUrl: './app.component.html',//conteúdo da view
  styleUrls: ['./app.component.css']  //conjunto de estilos css para este componente
})
export class AppComponent {
  title = 'app-conceitos';
}
