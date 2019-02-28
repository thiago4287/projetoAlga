import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {}
  oportunidades = [];
  constructor(private oportunidadeService: OportunidadeService,
              private messageService: MessageService) { }

      ngOnInit() {
       this.consultar();
  }
    

      consultar(){
          this.oportunidadeService.listar()
         .subscribe(response => this.oportunidades = response)
      }

      adicionar(){
        this.oportunidadeService.adicionar(this.oportunidade)
        .subscribe(()=> {
          this.oportunidade = {};//Limpa os campos
          this.consultar();//Chama o método consultar para atualizar a tabela
          this.messageService.add({
            severity: 'success',
            summary: 'Oportunidade adicionada com sucesso!'
          });
        },
        response => {
          let msg = 'Erro inesperado, tente novamente!';

          if(response.error.message){
            msg = response.error.message;
          }
          this.messageService.add({
            severity: 'error',
            summary: msg
        });
      });
      }
  }


