import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.scss']
})
export class ServicoListComponent implements OnInit {

    servicos : any = [] // vetor vazio

    displayedColumns: string[] = ['carro','Manutencao','Peca', 'editar','excluir']  

  constructor(
      private servicoSrv : ServicoService, 
      private snaskBar: MatSnackBar
      ) { }

 async ngOnInit() {
    this.servicos = await this.servicoSrv.listar()
    console.table(this.servicos)
  }

    async excluir(id : string){
      if(confirm(`deseja realmente excluir este item?\n O item será excluido permanetimente`)){
          try {
              // 1) Efetuar a exclusão 
              await this.servicoSrv.excluir(id)
              // 2)Atualizar os dados da tabela
              this.ngOnInit()
              // 3) Dar um feedback para o usuário
              this.snaskBar.open('item excluido com sucesso.','entendi',{
                 duration: 5000 //5 segundos
            })
          } catch(erro) {
              console.error(erro)
              //4) Dar um feedback de erro para o usuário
              this.snaskBar.open('ERRO: Não foi possivel excluir este item.','ALGUEM VACILO',{
                  duration:5000 //SEgundos
              })
            }
        }
    }
}