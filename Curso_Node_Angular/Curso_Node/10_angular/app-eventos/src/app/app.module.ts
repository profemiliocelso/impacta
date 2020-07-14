import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaEventosComponent } from './componentes/lista-eventos/lista-eventos.component';
import { ErroComponent } from './componentes/erro/erro.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { NovoEventoComponent } from './componentes/novo-evento/novo-evento.component';
import { VisualizarEventoComponent } from './componentes/visualizar-evento/visualizar-evento.component';
import { AlterarEventoComponent } from './componentes/alterar-evento/alterar-evento.component';
import { RemoverEventoComponent } from './componentes/remover-evento/remover-evento.component';
import { SubListaPipe } from './filtros/sub-lista.pipe';
import { NgElseDirective } from './diretivas/ng-else.directive';
import { DestaqueDirective } from './diretivas/destaque.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    HomeComponent,
    ListaEventosComponent,
    ErroComponent,
    NovoEventoComponent,
    VisualizarEventoComponent,
    AlterarEventoComponent,
    RemoverEventoComponent,
    SubListaPipe,
    NgElseDirective,
    DestaqueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
