import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppExemplo1Component } from './componentes/app-exemplo1/app-exemplo1.component';
import { AppExemplo2Component } from './componentes/app-exemplo2/app-exemplo2.component';
import { AppExemplo3Component } from './componentes/app-exemplo3/app-exemplo3.component';

@NgModule({
  declarations: [ //todos os componentes relacionados a este módulo
    AppComponent, AppExemplo1Component, AppExemplo2Component, AppExemplo3Component
  ],
  imports: [      // todos os módulos do projeto
    BrowserModule
  ],
  providers: [],  // todos os serviços (services)
  bootstrap: [AppComponent]   // componente inicial
})
export class AppModule { }
