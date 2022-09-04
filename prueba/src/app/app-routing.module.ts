import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { Registro2Component } from './registro2/registro2.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'registro2/:id', component: Registro2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
