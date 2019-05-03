import { Injectable } from '@angular/core';
import { NoticiaTO } from './../modelo/noticia.to';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssuntoTO } from '../modelo/assunto.to';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticias:NoticiaTO[] = [];

  constructor(private http: HttpClient) {
    this.noticias.push(new NoticiaTO('joao', 'Nova meta do Governo', 'governo@org.br', 1, '97116968','Orçamento do governo foi previsto para 4% como meta.'));
    this.noticias.push(new NoticiaTO('joao', 'Imposto de Renda preenchimento', 'receita@org.br', 2, '35405511','Receita aumenta o prazo para mais 30 dias para declaração do IR 2019'));
    this.noticias.push(new NoticiaTO('joao', 'Idade mínima para aposentadoria', 'inss@org.br', 3, '08005577722','Base aliada do gonerno, discorda de alguns pontos da reforma da previdência'));

   }

  public listarNoticias():NoticiaTO[] {


    return this.noticias;
  }

  public addNoticia(to:NoticiaTO){
    this.noticias.push(to);
  }

  public getPrimeira():NoticiaTO{

    return  this.noticias[0];
  }

  public remover(text:string){
    let ind:number = this.noticias.findIndex(e=> e.nome.toUpperCase ===text.toUpperCase);
    this.noticias.splice(ind,1);

  }

  public getAssunto():Observable<AssuntoTO[]>{

    return this.http.get<AssuntoTO[]>('assets/assuntos.json');

  }
}
