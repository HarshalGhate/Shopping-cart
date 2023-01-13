import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsDataService } from '../Services/products-data.service';
import { productInfo } from './product-info';
import { CartDataService } from '../Services/cart-data.service';
import { SearchProductService } from '../Services/search-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _Products: ProductsDataService, private _Cart: CartDataService, private _Search: SearchProductService) { }
  productList: undefined | productInfo[];
  ngOnInit(): void {

    // get product list
    this.getPopularProducts();
    this.getProducts();
  }

  getProducts() {
    this._Products.getProductList().subscribe(Response => {
      this.productList = Response;
      let searchItem = ''
      if (searchItem == '') {
        console.warn(this.productList);
        //  this.productList=prod;
      }

      this._Search.SearchProductSubject.subscribe(d => {
        searchItem = d
        this.productList=[]

        this.productList?.filter((prod:productInfo) => {
          console.warn();
          if(prod.title.includes(searchItem)){
            this.productList?.push(prod)
            console.warn("------prod=",this.productList);
          }
        })


      })
      // console.warn(this.productList);
    })
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
