import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../manutencao.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manutencao-list',
  templateUrl: './manutencao-list.component.html',
  styleUrls: ['./manutencao-list.component.scss']
})

export class ManutencaoListComponent implements OnInit {

    title : string = "Nova Manutenção"

    manutencoes : any = [] // vetor vazio
    
    displayedColumns: string[] = ['horario_inicial','horario_termino','funcionario','editar','excluir']  

  constructor(
      private manutencaoSrv : ManutencaoService,
      private snaskBar: MatSnackBar
      ) { }

 async ngOnInit() {
    this.manutencoes = await this.manutencaoSrv.listar()
    console.table(this.manutencoes)
  }

    async excluir(id : string){
        if(confirm(`deseja realmente excluir este item?\n O item será excluido permanetimente`)){
            try {
                // 1) Efetuar a exclusão 
                await this.manutencaoSrv.excluir(id)
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