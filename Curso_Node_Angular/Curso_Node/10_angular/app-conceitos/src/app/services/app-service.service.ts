import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  getTopicos(): string[] {
    return [
      'Conceitos do Node.js',
      'MVC com Express.js',
      'Webservices - criação e consumo',
      'MongoDB',
      'AngularJS',
      'Angular'
    ];
  }

}
