import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService {

  info: any = {};
  loaded: boolean = false;
  loaded_about: boolean = false;
  team: any[] = [];

  constructor( public http: Http ) {
    this.set_info();
    this.set_about();
  }

  public set_info() {
    this.http.get('assets/data/info.pagina.json')
    .subscribe(data => {
      // console.log(data.json());
      this.info = data.json();
      this.loaded = true;
    });
  }
  public set_about() {
    this.http.get('https://portafolio-c0285.firebaseio.com/team.json')
    .subscribe(data => {
      // console.log(data.json());
      this.team = data.json();
      this.loaded = true;
    });
  }
}
