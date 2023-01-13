import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from '../Services/products-data.service';
import { productInfo } from '../products/product-info';
import { CartDataService } from '../Services/cart-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _Product:ProductsDataService,private _Cart: CartDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params){
        this.getProductById(params['id'])        
      }
    })
  }

  ProductDetail:undefined | productInfo;
  rating:any;
  getProductById(id:any){
    this._Product.getProductById(id).subscribe(Response=>{
      this.ProductDetail = Response
      this.rating=this.ProductDetail.rating.rate
      console.warn(this.ProductDetail);
      
    })
  }
  

  AddProductToCart() {
    if(this.ProductDetail)
    {
      this.ProductDetail.quantity = 1
      this.ProductDetail.totalPrice = this.ProductDetail.price
    }
    this.ProductDetail && this._Cart.postProductToCart(this.ProductDetail).subscribe(Response => {
      this._Cart.getCartCount()
    })
  }

}
