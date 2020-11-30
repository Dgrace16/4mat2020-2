import { FuncionarioService } from './../../funcionario/funcionario.service';
import { ManutencaoService } from './../manutencao.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-manutencao-form',
  templateUrl: './manutencao-form.component.html',
  styleUrls: ['./manutencao-form.component.scss']
})
export class ManutencaoFormComponent implements OnInit {

    title : string = 'Nova manutenção'

    manutencao: any = {} //Objeto vazio, nome da entidade no SINGULAR

    // variaveis para armazenar as listagem das entidades relacionais
    funcionarios: any = [] // nome no plural vazio

  constructor(
    private manutencaoSrv:ManutencaoService,
    private funcionarioSrc: FuncionarioService,
    private snackBar: MatSnackBar,
    private location: Location,
    private actRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verificando se existe id na rota que trouxe ao formulário
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Trazer o registro do back-end para edição
        this.manutencao = await this.manutencaoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando  manutencao'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
          'Que pena! Alguem vacilo!', { duration: 5000 })
      }
    }
    // carregar as listagens das entidades relacionadas
    try {
        this.funcionarios = await this.funcionarioSrc.listar() 
    }
    catch(erro){
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados do formulario.',
        'Que pena! Alguem vacilo!', { duration: 5000 })
    }
   }

    async salvar(form : NgForm) {
    try {
      if(form.valid) {
        // 1) Enviar os dados para o back-end para serem salvos
        if(this.manutencao._id) {
          // _id existe, esse registro já foi salvo anteriormente
          // no BD e é caso de atualização
          await this.manutencaoSrv.atualizar(this.manutencao)
        }
        else {
          await this.manutencaoSrv.novo(this.manutencao)
        }
        // 2) Dar um feedback (mensagem) para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar para a tela de listagem
        this.location.back()
      }
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena! DERAM MOLE!',
        { duration: 5000 })
    }
  }

  voltar(form : NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }
    // Retorna à página anterior se resposta foi positiva ou se o formulário
    // estiver "limpo"
    if(result) this.location.back()
  }

}
