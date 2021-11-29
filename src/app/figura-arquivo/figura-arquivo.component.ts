import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Figuras, figuras } from '../figuras';

@Component({
  selector: 'app-figura-arquivo',
  templateUrl: './figura-arquivo.component.html',
  styleUrls: ['./figura-arquivo.component.css']
})
export class FiguraArquivoComponent implements OnInit {

  // Definindo o tipo, sendo Figura ou undefined
  figura: Figuras | undefined;
  // Definindo o tipo String Vetor com atribuição vazia
  figItem: string[]=[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    // Este é o caminho definido no 'app.component.ts'
    // No RouterModule.forRoot
    //         { path: 'figuras/:figuraNome', component: FiguraArquivoComponent }
    const productIdFromRoute = routeParams.get('figuraNome');
    
    // Descubra o item que corresponde ao id fornecido pela rota
    this.figura = figuras.find(figura => figura.nome === productIdFromRoute);
    // Aqui ele usa uma função arrow, onde caso encontre estritamente o valor e tipo

    this.figItem = this.gerarItens(this.figura!);
    // Acrescentado '!' no final de 'this.figura' para ignorar o aviso de atribuição | undefined
  }
  
  gerarItens(fig: Figuras){
    // Gera a lista de figuras cada cada quantidade dos grupos
    let itens: string[]=[]; // forma de declarar do typescript com valor nulo
    for (let index = 1; index <= fig.qte; index++) {
       itens.push(
         fig.sigla + String(index) + '.png'
       )
    }
    return itens
  }

}
