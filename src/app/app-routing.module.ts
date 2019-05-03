import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'noticias', loadChildren:'./view/noticias/noticias.module#NoticiasModule'},
  {path:'',loadChildren:'./view/noticias/noticias.module#NoticiasModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
