import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroListComponent } from './carro/carro-list/carro-list.component';

const routes: Routes = [
    // Rotas no Angular NUNCA começam com /
    { path: 'carro', component: CarroListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
