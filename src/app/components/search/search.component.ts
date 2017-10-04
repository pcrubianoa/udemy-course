import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  word: string = undefined;

  constructor( public route: ActivatedRoute,
              public _ps: ProductsService ) {
    route.params.subscribe(parametros => {
      this.word = parametros['word'];
      console.log(this.word);

      _ps.search_product( this.word );

    });
  }

}
