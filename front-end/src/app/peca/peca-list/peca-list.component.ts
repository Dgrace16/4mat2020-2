import { Component, OnInit } from '@angular/core';
import { PecaService } from '../peca.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-peca-list',
  templateUrl: './peca-list.component.html',
  styleUrls: ['./peca-list.component.scss']
})
export class PecaListComponent implements OnInit {

    pecas : any = []  // vetor vazio
    
    displayedColumns: string[] = ['nome','fabricante','valor', 'marca_carro', 'descricao', 'editar','excluir']  

  constructor(
        private pecaSrv : PecaService,
        private snaskBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.pecas = await this.pecaSrv.listar()
    console.table(this.pecas)

  }


    async excluir(id : string){
        if(confirm(`deseja realmente excluir este item?\n O item será excluido permanetimente`)){
            try {
                // 1) Efetuar a exclusão 
                await this.pecaSrv.excluir(id)
                // 2)Atualizar os dados da tabela
                this.ngOnInit()
                // 3) Dar um feedback para o usuário
                    this.snaskBar.open('item excluido com sucesso.','entendi',{
                        duration: 5000 //5 segundos})
                })
            } catch(erro) {
                console.error(erro)
                //4) Dar um feedback de erro para o usuário
                this.snaskBar.open('ERRO: Não foi possivel excluir este item.','ALGUEM VACILO, que pena!',{
                    duration:5000 //SEgundos
                })
            }
        }
    }
}