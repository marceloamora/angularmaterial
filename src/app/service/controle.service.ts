import { Injectable } from '@angular/core';
import { NavegacaoTO } from './../modelo/navegacao.to';


@Injectable({
  providedIn: 'root'
})
export class ControleService {

 private itensmenu:NavegacaoTO[]=[];

  constructor() {
    this.itensmenu.push(new NavegacaoTO(1, 'Noticias','/noticias'));
    this.itensmenu.push(new NavegacaoTO(2, 'Nova Notícia','/noticias/novo'));
  }

  public obterListaMenu():NavegacaoTO[]{

    return   this.itensmenu;
  }


}
