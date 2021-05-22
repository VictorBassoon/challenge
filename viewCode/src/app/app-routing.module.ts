import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunidadeComponent } from './feature/comunidade/comunidade.component';
import { HomeComponent } from './feature/home/home.component';

const routes: Routes = [
  {path:'code',component:HomeComponent},
  {path:'comunidade',component:ComunidadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
