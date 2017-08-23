import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WindowRefProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

 function _window() : any {
   return window; // return the global native browser window object
} 

@Injectable()
export class WindowRefProvider {

  constructor() {
    console.log('Hello WindowRefProvider Provider');
  }

  get nativeWindow() : any {
     return _window();
  }  
}
