import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

products: any[] = [];
products_filter: any[] = [];
loaded: boolean = true;

  constructor( private http: Http) {
    this.load_products();
}

  public search_product( word: string ) {

    if ( this.products.length === 0 ) {
      this.load_products().then( () => {
        this.filter_products( word );
      });
    }else {
      this.filter_products( word );
    }
}

  private filter_products( word: string ) {
    this.products_filter = [];
    this.products.forEach(prod => {
      word = word.toLowerCase();

      if ( prod.categoria.indexOf( word ) >= 0 || prod.titulo.toLowerCase().indexOf( word ) >= 0) {
        this.products_filter.push( prod );
        //console.log(this.products_filter);
      }

      // console.log(prod);
    });
  }

  public load_product( cod: string ) {
    return this.http.get(`https://portafolio-c0285.firebaseio.com/products/${ cod }.json`)
  }

  public load_products() {

    this.loaded = true;
    let promise = new Promise( (resolve, reject) => {
      this.http.get('https://portafolio-c0285.firebaseio.com/products_idx.json')
      .subscribe(res => {
        // console.log( res.json() );
        this.loaded = false;
        this.products = res.json();
        resolve();
      });
    });
    return promise;
  }
}
