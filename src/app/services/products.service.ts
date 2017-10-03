import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

products: any[] = [];
loaded: boolean = true;

  constructor( private http: Http) {
    this.load_products();
}

  public load_products() {
      this.http.get('https://portafolio-c0285.firebaseio.com/products_idx.json')
      .subscribe(res => {
        console.log( res.json() );
        this.loaded = false;
        this.products = res.json();
      });
}
}
