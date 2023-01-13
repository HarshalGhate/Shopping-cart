import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../Services/cart-data.service';
import { productInfo } from '../products/product-info';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _Cart: CartDataService, private fobj: FormBuilder) { }

  cartList: productInfo[] = [];

  ngOnInit(): void {

    this.getallCart()
    
    // to get cart count
    this._Cart.getCartCount()

    // this._Cart.getCart().subscribe(Response=>{
    //   this.cartList=Response;
    // })
  }

  formData = this.fobj.group({
    Price: [''],
    Quantity: ['']
  })



  getallCart() {
    this._Cart.getCart().subscribe(Response => {
      this.cartList = Response;
    })
  }

  removeItem(id: number) {

    this._Cart.removeCartItem(id).subscribe(Response => {
      this.getallCart()
      this._Cart.getCartCount()
    })
  }

  EditItem(data: any) {
    console.warn(data);

  }

  removeAll() {

  }

  public Quantity = 1

  addQuantity(data: any) {
    if (data.quantity < 20) {
      data.quantity++;
      data.totalPrice = data.price * data.quantity;
      console.warn(data);
      this._Cart.updateCartQuantity(data).subscribe(Res => {
        this.getallCart()
      })
    }
  }

  substractQuantity(data: any) {
    console.warn(data);

    if (data.quantity >=1) {
      data.quantity--;
      data.totalPrice = data.price * data.quantity;
      if(data.quantity==0){
        this.removeItem(data.id);
      }
      
      this._Cart.updateCartQuantity(data).subscribe(Res => {
        this.getallCart()
      })
    }
    
  }




}
