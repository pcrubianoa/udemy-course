import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {

product: any = undefined;
cod: string = undefined;

  constructor( private route: ActivatedRoute,
               private _ps: ProductsService ) {
    route.params.subscribe(parametros => {
      // console.log( parametros );
      // console.log( parametros['id'] );
      _ps.load_product( parametros['id'] )
      .subscribe(res => {

        this.cod = parametros['id'];
        this.product = res.json();
        console.log( res.json());
      });
    });
  }
}
