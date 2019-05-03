import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';
import { NovoComponent } from './novo/novo.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { NoticiasRouterModule } from './app-noticias.routing.module';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { EsquerdoComponent } from './esquerdo/esquerdo.component';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  declarations:
  [
    NoticiasComponent,
    NovoComponent,
    ConteudoComponent,
     EsquerdoComponent,
  ],
  imports: [


  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
    FormsModule,
    TextMaskModule,
    NoticiasRouterModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule

  ]
})
export class NoticiasModule { }
