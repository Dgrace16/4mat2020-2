import { Component, OnInit } from '@angular/core';
import { PecaService } from 'src/app/peca/peca.service';
import { ManutencaoService } from 'src/app/manutencao/manutencao.service';
import { CarroService } from 'src/app/carro/carro.service';
import { ServicoService } from '../servico.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-servico-form',
    templateUrl: './servico-form.component.html',
    styleUrls: ['./servico-form.component.scss']
})
export class ServicoFormComponent implements OnInit {

    title: string = 'novo servico'

    servico: any = {} //Objeto vazio, nome da entidade no SINGULAR

    // variaveis para armazenar as listagem das entidades relacionais
    carros: any = []  // nome no plural vazio
    manutencoes: any = []  // nome no plural vazio
    pecas: any = []  // nome no plural vazio

    constructor(
        private servicoSrv: ServicoService,
        private carroSrv: CarroService,
        private manutencaoSrv: ManutencaoService,
        private pecaSrv: PecaService,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }


    async ngOnInit() {
        // Verificando se existe id na rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try {
                // 1) Trazer o registro do back-end para edição
                this.servico = await this.servicoSrv.obterUm(this.actRoute.snapshot.params['id'])
                // 2) Mudar o título da página
                this.title = 'Editando servico'
            }
            catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
                    'Que pena! Alguem vacilo!', { duration: 5000 })
            }
        }
        try {
            this.carros = await this.carroSrv.listar()
            this.manutencoes = await this.manutencaoSrv.listar()
            this.pecas = await this.pecaSrv.listar()
        }
        catch (erro) {
            console.log(erro)
            this.snackBar.open('ERRO: não foi possível carregar todos os dados do formulário.',
                'Que pena!', { duration: 5000 })
        }

    }
    async salvar(form: NgForm) {
        try {
            if (form.valid) {
                // 1) Enviar os dados para o back-end para serem salvos
                if (this.servico._id) {
                    // _id existe, esse registro já foi salvo anteriormente
                    // no BD e é caso de atualização
                    await this.servicoSrv.atualizar(this.servico)
                }
                else {
                    await this.servicoSrv.novo(this.servico)
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