// Bem no início do arquivo app.module.ts
import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Na seção de imports do app.module.ts
// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CarroListComponent } from './carro/carro-list/carro-list.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { ManutencaoListComponent } from './manutencao/manutencao-list/manutencao-list.component';
import { PecaListComponent } from './peca/peca-list/peca-list.component';
import { ServicoListComponent } from './servico/servico-list/servico-list.component';

import { CarroFormComponent } from './carro/carro-form/carro-form.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { ManutencaoFormComponent } from './manutencao/manutencao-form/manutencao-form.component';
import { PecaFormComponent } from './peca/peca-form/peca-form.component';
import { ServicoFormComponent } from './servico/servico-form/servico-form.component';

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
    FormsModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
       // No app.module.ts, dentro seção providers
  /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  /**********************************************/  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
