import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroListComponent } from './carro/carro-list/carro-list.component';
import { CarroFormComponent } from './carro/carro-form/carro-form.component';

const routes: Routes = [
    // Rotas no Angular NUNCA começam com /
    { path: 'carro', component: CarroListComponent },
    { path: 'carro/novo', component: CarroFormComponent },
    { path: 'carro/:id', component: CarroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
