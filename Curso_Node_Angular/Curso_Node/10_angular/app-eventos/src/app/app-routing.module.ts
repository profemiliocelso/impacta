import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaEventosComponent } from './componentes/lista-eventos/lista-eventos.component';
import { ErroComponent } from './componentes/erro/erro.component';
import { NovoEventoComponent } from './componentes/novo-evento/novo-evento.component';
import { VisualizarEventoComponent } from './componentes/visualizar-evento/visualizar-evento.component';
import { AlterarEventoComponent } from './componentes/alterar-evento/alterar-evento.component';
import { RemoverEventoComponent } from './componentes/remover-evento/remover-evento.component';


const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "home", component: HomeComponent },
  { path: "eventos", component: ListaEventosComponent },
  { path: "eventos/novo", component: NovoEventoComponent },
  { path: "eventos/visualizar/:id", component: VisualizarEventoComponent },
  { path: "eventos/alterar/:id", component: AlterarEventoComponent },
  { path: "eventos/remover/:id", component: RemoverEventoComponent },
  { path: "**", component: ErroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
