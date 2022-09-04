import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistrosService } from './services/registros.service';
import { Registro2Component } from './registro2/registro2.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MostrarRegistrosPipe } from './mostrar-registros.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    Registro2Component,
    MostrarRegistrosPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'registro2/:variable',
      component:Registro2Component
      },
      { path:'registro/:variable',
      component:RegistroComponent
    }]),
  ],
  providers: [
    RegistrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
