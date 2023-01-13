import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsDataService } from '../Services/products-data.service';
import { productInfo } from './product-info';
import { CartDataService } from '../Services/cart-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _Products: ProductsDataService, private _Cart: CartDataService) { }
  productList: undefined | productInfo[];
  ngOnInit(): void {

    // get product list
    this._Products.getProductList().subscribe(Response => {
      this.productList = Response;
      console.warn(this.productList);
    })
    this.getPopularProducts();
  }

  PopularProducts: productInfo[] = []
  getPopularProducts() {
    this._Products.getPopularProduct().subscribe(Response => {
      this.PopularProducts = Response;
      console.warn(this.PopularProducts);

    })
  }

  AddcartList: productInfo[] = []
  AddProductToCart(data: productInfo) {
    data.quantity = 1
    data.totalPrice = data.price
    this._Cart.postProductToCart(data).subscribe(Response => {
      this._Cart.getCartCount()
    })
  }



}
