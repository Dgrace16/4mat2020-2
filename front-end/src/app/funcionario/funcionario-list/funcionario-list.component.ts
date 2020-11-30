import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-funcionario-list',
    templateUrl: './funcionario-list.component.html',
    styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

    title: string = "Novo Funcionario"

    funcionarios: any = [] // vetor vazio

    displayedColumns: string[] = ['nome', 'data_nascimento', 'cpf', 'rg', 'endereco', 'telefone', 'funcao', 'email', 'editar', 'excluir']

    constructor(
        private funcionarioSrv: FuncionarioService,
        private snaskBar: MatSnackBar
    ) { }

    async ngOnInit() {
        this.funcionarios = await this.funcionarioSrv.listar()
        console.table(this.funcionarios)
    }

    async excluir(id: string) {
        if (confirm(`deseja realmente excluir este item?\n O item será excluido permanetimente`)) {
            try {
                // 1) Efetuar a exclusão 
                await this.funcionarioSrv.excluir(id)
                // 2)Atualizar os dados da tabela
                this.ngOnInit()
                // 3) Dar um feedback para o usuário
                this.snaskBar.open('item excluido com sucesso.', 'entendi', {
                    duration: 5000 //5 segundos
                })
            } catch (erro) {
                console.error(erro)
                //4) Dar um feedback de erro para o usuário
                this.snaskBar.open('ERRO: Não foi possivel excluir este item.', 'ALGUEM VACILO', {
                    duration: 5000 //SEgundos
                })
            }
        }
    }
}