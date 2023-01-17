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
  productList:productInfo[]=[];
  ngOnInit(): void {

    // get product list
    // this.getPopularProducts();
    this.getCarouselImg();
    this.getProducts();
  }

  public searchItem=''
  public copy:any;
  getProducts() {
    this._Products.getProductList().subscribe(Response => {
      this.productList = Response;
      
      // search string
      this._Search.SearchProductSubject.subscribe(d => {
        this.searchItem = d
        // this.PopularProducts=[]
        this.Img=[]
      })
      // console.warn(this.productList);
    })
  }


  // PopularProducts: productInfo[] = []
  // getPopularProducts() {
  //   this._Products.getPopularProduct().subscribe(Response => {
  //     this.PopularProducts = Response;
  //     // console.warn(this.PopularProducts);
  //   })
  // }
  

  AddcartList: productInfo[] = []
  AddProductToCart(data: productInfo) {
    data.quantity = 1
    data.totalPrice = data.price
    console.warn("data------",data);
    
    this._Cart.postProductToCart(data).subscribe(Response => {
      this._Cart.getCartCount()
    })
  }
public Img:any[]=[]
getCarouselImg(){
  this.Img=["assets/carousel/amazon1.jpg","assets/carousel/amazon2.jpg","assets/carousel/amazon3.jpg"]
}

}
