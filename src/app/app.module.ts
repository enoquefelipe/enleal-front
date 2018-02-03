import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgendaListagemComponent } from './agenda-listagem/agenda-listagem.component';

import { AgendaService } from './service/agenda.service';


@NgModule({
  declarations: [
    AppComponent,
    AgendaListagemComponent
  ],

  imports: [
    BrowserModule, HttpClientModule
  ],

  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
