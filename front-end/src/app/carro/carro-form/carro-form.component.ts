import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html',
  styleUrls: ['./carro-form.component.scss']
})
export class CarroFormComponent implements OnInit {

    title : string = 'novo carro'

    carro : any = {} //Objeto vazio, nome da entidade no SINGULAR

  constructor() { }

    ngOnInit(): void {

    
    }
     salvar(form){

  
    }

}
