import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FiguraPastaComponent } from './figura-pasta/figura-pasta.component';
import { FiguraArquivoComponent } from './figura-arquivo/figura-arquivo.component';


@NgModule({
  declarations: [
    AppComponent,
    FiguraPastaComponent,
    FiguraArquivoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: FiguraPastaComponent },
      { path: 'figuras/:figuraNome', component: FiguraArquivoComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
