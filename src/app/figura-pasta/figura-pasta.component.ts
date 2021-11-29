import { Component, OnInit } from '@angular/core';
// importando os dados estaticos das figuras
import { figuras } from '../figuras';

@Component({
  selector: 'app-figura-pasta',
  templateUrl: './figura-pasta.component.html',
  styleUrls: ['./figura-pasta.component.css']
})
export class FiguraPastaComponent implements OnInit {

  // Trazendo o objeto figuras e associando a variavel local figuras
  figuras = figuras;

  constructor() { }

  ngOnInit(): void {
  }

}
