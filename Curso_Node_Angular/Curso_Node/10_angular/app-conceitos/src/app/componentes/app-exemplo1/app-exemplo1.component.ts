import { Component } from '@angular/core';

@Component({
    selector: 'app-exemplo1',
    templateUrl: 'app-exemplo1.component.html'
})
export class AppExemplo1Component { 
    titulo: string = "Primeiro exemplo de Angular";

    //lista de tópicos estudados no curso
    topicos: string[] = [
        'Conceitos do Node.js',
        'MVC com Express.js',
        'Webservices - criação e consumo',
        'MongoDB',
        'AngularJS',
        'Angular'
    ];

    
}