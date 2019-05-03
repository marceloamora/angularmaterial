import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NoticiaTO } from 'src/app/modelo/noticia.to';
import { NoticiasService } from 'src/app/service/noticias.service';
import { AssuntoTO } from 'src/app/modelo/assunto.to';


@Component ({
  selector:'app-conteudo',
  templateUrl:'./conteudo.component.html',
  styleUrls: ['./conteudo.component.css']

})

export class ConteudoComponent implements OnInit{
  @Input() noticia:NoticiaTO;

  @Output() noticiaEvento= new EventEmitter;

  assuntos:AssuntoTO[]= [];
  constructor(private noticiaService:NoticiasService){}

  ngOnInit(): void {
  this.carregarCombos();
  }

  carregarCombos(){
    this.noticiaService.getAssunto().subscribe(e=>{
      this.assuntos = e;
    })
  }

  onExluir(item:NoticiaTO){
    this.noticiaEvento.emit(<NoticiaTO>item);
  }

  getAssunto(id:number):String{
    let encontrado:AssuntoTO;
    this.assuntos.forEach((e:AssuntoTO)=>{
      if(e.id===id){
        return e.nome
      }
    });
    return undefined;
  }

}
