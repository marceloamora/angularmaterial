import { Component, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger, MatIcon, MatIconBase } from '@angular/material';
import { ControleService } from './service/controle.service';
import { NavegacaoTO } from './modelo/navegacao.to';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  itensMenu:NavegacaoTO[];

  ngOnInit(): void {
    this.itensMenu = this.controleService.obterListaMenu();

  }

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor(private controleService:ControleService){}

}
