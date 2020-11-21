import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroListComponent } from './carro/carro-list/carro-list.component';
import { CarroFormComponent } from './carro/carro-form/carro-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { ManutencaoListComponent } from './manutencao/manutencao-list/manutencao-list.component';
import { ManutencaoFormComponent } from './manutencao/manutencao-form/manutencao-form.component';
import { ServicoListComponent } from './servico/servico-list/servico-list.component';
import { ServicoFormComponent } from './servico/servico-form/servico-form.component';
import { PecaListComponent } from './peca/peca-list/peca-list.component';
import { PecaFormComponent } from './peca/peca-form/peca-form.component';

const routes: Routes = [
    // Rotas no Angular NUNCA começam com /
    // Carro
    { path: 'carro', component: CarroListComponent },
    { path: 'carro/novo', component: CarroFormComponent },
    { path: 'carro/:id', component: CarroFormComponent },
    // Cliente
    { path: 'cliente', component: ClienteListComponent },
    { path: 'cliente/novo', component: ClienteFormComponent },
    { path: 'cliente/:id', component: ClienteFormComponent },
    // Funcionario
    { path: 'funcionario', component: FuncionarioListComponent },
    { path: 'funcionario/novo', component: FuncionarioFormComponent },
    { path: 'funcionario/:id', component: FuncionarioFormComponent },
    // Manutencao
    { path: 'manutencao', component: ManutencaoListComponent },
    { path: 'manutencao/novo', component: ManutencaoFormComponent },
    { path: 'manutencao/:id', component: ManutencaoFormComponent },
    // Peca
    { path: 'peca', component: PecaListComponent },
    { path: 'peca/novo', component: PecaFormComponent },
    { path: 'peca/:id', component: PecaFormComponent },
    // Servico
    { path: 'servico', component: ServicoListComponent },
    { path: 'servico/novo', component: ServicoFormComponent },
    { path: 'servico/:id', component: ServicoFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
