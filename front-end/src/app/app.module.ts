
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarroListComponent } from './carro/carro-list/carro-list.component';
import { CarroFormComponent } from './carro/carro-form/carro-form.component';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { ManutencaoListComponent } from './manutencao/manutencao-list/manutencao-list.component';
import { PecaListComponent } from './peca/peca-list/peca-list.component';
import { ServicoListComponent } from './servico/servico-list/servico-list.component';
import { ServicoFormComponent } from './servico/servico-form/servico-form.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { ManutencaoFormComponent } from './manutencao/manutencao-form/manutencao-form.component';
import { PecaFormComponent } from './peca/peca-form/peca-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
    CarroListComponent,
    CarroFormComponent,
    ClienteListComponent,
    FuncionarioListComponent,
    ManutencaoListComponent,
    PecaListComponent,
    ServicoListComponent,
    ServicoFormComponent,
    ClienteFormComponent,
    FuncionarioFormComponent,
    ManutencaoFormComponent,
    PecaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
