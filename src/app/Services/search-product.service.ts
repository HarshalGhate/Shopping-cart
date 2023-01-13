import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  public SearchProductSubject = new Subject<string>(); 
  constructor() { }

  sendToSearchProduct(data:any){
    this.SearchProductSubject.next(data)
  }
}
