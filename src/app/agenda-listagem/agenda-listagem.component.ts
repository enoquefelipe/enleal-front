import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../service/agenda.service';

@Component({
  selector: 'app-agenda-listagem',
  templateUrl: './agenda-listagem.component.html',
  styleUrls: ['./agenda-listagem.component.css']
})
export class AgendaListagemComponent implements OnInit {

  contatos: object;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.getLista();
  }

  getLista(){
    this.agendaService.getLista().subscribe(dados => this.contatos = dados);
  }

}
