import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent implements OnInit {

    carros : any = [] // Vetor vazio

  constructor(private carroSrv: CarroService) { }

 async ngOnInit() {
      this.carros = await this.carroSrv.listar()
      console.log(this.carros)
  }

}
