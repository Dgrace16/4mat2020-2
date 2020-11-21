import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

    clientes : any = [] // vetor vazio

    displayedColumns: string[] = ['nome','data_nascimento','cpf','rg','endereco','telefone','email','editar','excluir']  

  constructor(
      private clienteSrv : ClienteService,
      private snaskBar: MatSnackBar
      ) { }

  async ngOnInit() {
    this.clientes = await this.clienteSrv.listar()
    console.table(this.clientes)
  }
 async excluir(id : string){
      if(confirm(`deseja realmente excluir este item?\n O item será excluido permanetimente`)){
          try {
              // 1) Efetuar a exclusão 
              await this.clienteSrv.excluir(id)
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