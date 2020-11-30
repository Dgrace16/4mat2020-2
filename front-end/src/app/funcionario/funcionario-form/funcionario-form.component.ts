import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-funcionario-form',
    templateUrl: './funcionario-form.component.html',
    styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {

    title: string = 'Novo funcionario'

    funcionario: any = {} //Objeto vazio, nome da entidade no SINGULAR

    funcoes: any = [
        { valor: 'alinhador', descr: 'alinhador' },
        { valor: 'eletricista', descr: 'eletricista' },
        { valor: 'funilaria', descr: 'funilaria' },
        { valor: 'mecanico', descr: 'mecanico' },
        { valor: 'pintura', descr: 'pintura' },
        { valor: 'retificador', descr: 'retificador' },
        { valor: 'tapeceiro', descr: 'tapeceiro' }
    ]

    constructor(
        private funcionarioSrv: FuncionarioService,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        // Verificando se existe id na rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try {
                // 1) Trazer o registro do back-end para edição
                this.funcionario = await this.funcionarioSrv.obterUm(this.actRoute.snapshot.params['id'])
                // 2) Mudar o título da página
                this.title = 'Editando funcionario'
            }
            catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
                    'Que pena! Alguem vacilo!', { duration: 5000 })
            }
        }


    }
    async salvar(form: NgForm) {
        try {
            if (form.valid) {
                // 1) Enviar os dados para o back-end para serem salvos
                if (this.funcionario._id) {
                    // _id existe, esse registro já foi salvo anteriormente
                    // no BD e é caso de atualização
                    await this.funcionarioSrv.atualizar(this.funcionario)
                }
                else {
                    await this.funcionarioSrv.novo(this.funcionario)
                }
                // 2) Dar um feedback (mensagem) para o usuário
                this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
                    { duration: 5000 })
                // 3) Voltar para a tela de listagem
                this.location.back()
            }
        }
        catch (erro) {
            console.log(erro)
            this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena! DERAM MOLE!',
                { duration: 5000 })
        }
    }

    voltar(form: NgForm) {
        let result = true
        // form.dirty = formulário "sujo", não salvo (via código)
        // form.touched = o conteúdo de algum campo foi alterado (via usuário)
        if (form.dirty && form.touched) {
            result = confirm('Há dados não salvos. Deseja realmente voltar?')
        }
        // Retorna à página anterior se resposta foi positiva ou se o formulário
        // estiver "limpo"
        if (result) this.location.back()
    }

}
