import { MatSnackBar } from '@angular/material/snack-bar';
import { CarroService } from './../carro.service';
import { ClienteService } from './../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-carro-form',
    templateUrl: './carro-form.component.html',
    styleUrls: ['./carro-form.component.scss']
})
export class CarroFormComponent implements OnInit {

    title: string = 'novo carro'

    carro: any = {} //Objeto vazio, nome da entidade no SINGULAR

    // variaveis para armazenar as listagem das entidades relacionais
    clientes: any = []  // nome no plural vazio

    constructor(
        private carroSrv: CarroService,
        private clienteSrv: ClienteService,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        // Verificando se existe id na rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try {
                // 1) Trazer o registro do back-end para edição
                this.carro = await this.carroSrv.obterUm(this.actRoute.snapshot.params['id'])
                // 2) Mudar o título da página
                this.title = 'Editando carro'
            }
            catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
                    'Que pena! Alguem vacilo!', { duration: 5000 })
            }
        }
        try {
            this.clientes = await this.clienteSrv.listar()
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
                if (this.carro._id) {
                    // _id existe, esse registro já foi salvo anteriormente
                    // no BD e é caso de atualização
                    await this.carroSrv.atualizar(this.carro)
                }
                else {
                    await this.carroSrv.novo(this.carro)
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
