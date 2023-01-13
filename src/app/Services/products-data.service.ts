import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productInfo } from '../products/product-info';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http:HttpClient) { }

  apiUrl="https://fakestoreapi.com"
  getProductList(){
    return this.http.get<productInfo[]>(this.apiUrl+"/products")
  }

  getPopularProduct(){
    return this.http.get<productInfo[]>(this.apiUrl+"/products?limit=4")
  }
  getProductById(id:any){
    return this.http.get<productInfo>(this.apiUrl+`/products/${id}`)
  }

  

 
}
