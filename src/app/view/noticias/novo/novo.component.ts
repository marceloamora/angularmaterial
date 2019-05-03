import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/service/noticias.service';
import { AssuntoTO } from './../../../modelo/assunto.to';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoticiaTO } from 'src/app/modelo/noticia.to';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {
  public static   TelefoneCelularComDDD = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  assuntos:AssuntoTO[]= [];
  form:FormGroup;
  constructor(
    private noticiasService:NoticiasService,
    private fb:FormBuilder
    ) { }

  ngOnInit() {
    this.iniciarForm();
    this.carregarCombos();

  }

  carregarCombos(){
    this.noticiasService.getAssunto().subscribe(e=>{
      this.assuntos = e;
    })
  }

  cadastrar(){

    let nome = this.form.get("nome").value;
    let email = this.form.get("email").value;
    let assunto = this.form.get("assunto").value;
    let telefone = this.form.get("telefone").value;
    let titulo = this.form.get("titulo").value;
    let mensagem = this.form.get("mensagem").value;
    let nova = new NoticiaTO(nome, titulo, email, assunto, telefone,mensagem);
    this.noticiasService.addNoticia(nova );
    //console.log(JSON.stringify(nova));
    this.form.reset();
  }

  iniciarForm(){
    this.form = this.fb.group({
      nome: [null,  Validators.compose([Validators.pattern('[A-Za-z]{1,10}'), Validators.maxLength(7)])],
      email: [null,   [Validators.required, Validators.email]],
      assunto: [null,   [Validators.required]],
      telefone: [null],
      titulo: [null ,[Validators.required]],
      mensagem: [null,   [Validators.required, Validators.maxLength(500)]],


    });
  }

  verificarValidacaoForm(fg: FormGroup) {
    Object.keys(fg.controls).forEach(campo => {
      const controle = fg.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificarValidacaoForm(controle);
      }
    });
  }


  public  validarCampoFormulario(campo: string): any {
   const fg = this.form;
    return !fg.get(campo).valid &&   (fg.get(campo).touched || fg.get(campo).dirty);
  }


  validaNumero(evt) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[0-9]/;
      /*Para aceitar o backspace */
      if (key === '\u0008') {
        return ;
       }
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) {
        theEvent.preventDefault();
      }
    }
  }

}
