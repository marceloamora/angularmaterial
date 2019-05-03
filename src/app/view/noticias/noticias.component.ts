import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/service/noticias.service';
import { NoticiaTO } from 'src/app/modelo/noticia.to';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias:NoticiaTO[]=[]
  umaNoticia:NoticiaTO
  constructor(private noticiaService:NoticiasService) { }

  ngOnInit() {
    this.noticias = this.noticiaService.listarNoticias();
    this.umaNoticia = this.noticiaService.getPrimeira();
    //console.log(JSON.stringify(this.umaNoticia));
  }

  executarExcluir(noticia:NoticiaTO){
   // console.log(noticia);
    this.noticiaService.remover(noticia.nome);
    console.log(this.noticiaService.listarNoticias().length);
    if(this.noticiaService.listarNoticias().length==0){
        this.umaNoticia=undefined;
    }else{
         this.umaNoticia = this.noticiaService.getPrimeira();
    }
  }

  exibirSelecionada(noticia:NoticiaTO){
    console.log(JSON.stringify(noticia))
     this.umaNoticia = noticia;
  }

}
