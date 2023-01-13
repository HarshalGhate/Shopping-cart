import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productInfo } from '../products/product-info';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  public cartItemList: any = []
  public cartCount = new Subject<any>;
   
  public productList = new BehaviorSubject<any>([])
  constructor(private http: HttpClient) { }

  postProductToCart(data: productInfo) {
    return this.http.post(`http://localhost:3000/carts`, data)
  }
  getCart() {
    return this.http.get<productInfo[]>(`http://localhost:3000/carts`)
  }

  getCartCount() {
     this.http.get(`http://localhost:3000/carts`).subscribe(Repsonse=>{
      this.cartItemList = Repsonse
      let Count = this.cartItemList.length
      // console.warn("get Cart 1----------",Count);
      this.sendCartCount(Count)
    })
  }

  sendCartCount(data:any){
    this.cartCount.next(data);
  }

  updateCartQuantity(data:any){
    return this.http.put(`http://localhost:3000/carts/${data.id}`,data)
  }
  

  removeCartItem(id: number) {
    console.warn(id);
    return this.http.delete(`http://localhost:3000/carts/${id}`)
  }
















  // getCart() {
  //   return this.productList.asObservable();
  // }

  // setProduct(product:any){
  //   this.cartItemList.push(...product)
  //   this.productList.next(product)
  // }

  // postProductToCart(product: productInfo) {
  //   this.cartItemList.push(product)
  //   this.productList.next(this.cartItemList)
  //   this.getTotalPrice();
  // }

  // getTotalPrice(){
  //   let grantTotal = 0;
  //   this.cartItemList.map((a:any)=>{
  //     grantTotal+=a.total;
  //   })
  // }

  // removeCartItem(product:any){
  //   this.cartItemList.map((a:any,index:any)=>{
  //     if(product.id===a.id){
  //       this.cartItemList.splice(index,1)
  //     }
  //   })
  //   this.getCart()
  // }

  // removeAllCart(){
  //   this.cartItemList = []
  //   this.productList.next(this.cartItemList)
  // }

}
