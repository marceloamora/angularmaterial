import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NoticiasService } from './../../../service/noticias.service';
import { NoticiaTO } from './../../../modelo/noticia.to';

@Component({
  selector:'app-esquerdo',
  templateUrl:'./esquerdo.component.html',
  styleUrls: ['./esquerdo.component.css']

})

export class EsquerdoComponent implements OnInit{

  @Input() noticiasEntrada:NoticiaTO[]=[]
  @Output() escolherEmitter = new EventEmitter()

  constructor(){}

  ngOnInit(): void {

  }

  onSelecionar(noticia:NoticiaTO){

    this.escolherEmitter.emit(<NoticiaTO> noticia);

  }

}
