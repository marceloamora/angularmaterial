import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './noticias.component';
import { NovoComponent } from './novo/novo.component';

const routes:Routes=[
{path:'', component:NoticiasComponent},
{path:'novo', component:NovoComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class NoticiasRouterModule{

}
