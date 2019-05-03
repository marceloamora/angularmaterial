export class NoticiaTO{
  constructor(
    public nome?:string,
    public titulo?:string,
    public email?:string,
    public assunto?:number,
    public telefone?:string,
    public mensagem?:string,
    public data:Date = new Date()

  ){ }

}
