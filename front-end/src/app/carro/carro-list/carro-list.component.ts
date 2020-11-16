import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent implements OnInit {

    carros : any = [] // Vetor vazio

    displayedColumns: string[] = ['placa', 'marca', 'modelo', 'ano', 'cor' ,'interior' ,'cliente', 'editar', 'excluir']

  constructor(
      private carroSrv: CarroService,
      private snaskBar: MatSnackBar
      ) { }

 async ngOnInit() {
      this.carros = await this.carroSrv.listar()
      console.log(this.carros)
  }

   async excluir(id : string){
      if(confirm(`deseja realmente excluir este item?\n O item será excluido permanetimente`)){
          try {
              // 1) Efetuar a exclusão 
              await this .carroSrv.excluir(id)
              // 2)Atualizar os dados da tabela
              this.ngOnInit()
              // 3) Dar um feedback para o usuário
            this.snaskBar.open('item excluido com sucesso.','entendi',{
            duration: 5000 //5 segundos
            })
          } catch(erro) {
              console.log(erro)
              //4) Dar um feedback de erro para o usuário
              this.snaskBar.open('ERRO: Não foi possivel excluir este item.','ALGUEM VACILO',{
                  duration:5000 //SEgundos
              })
          }

      }
  }
}
