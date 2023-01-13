import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../Services/cart-data.service';
import { SearchProductService } from '../Services/search-product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  totalCartItem= 0
  constructor(private cartService:CartDataService , private _Search:SearchProductService) { }
  
  ngOnInit(): void {
    this.cartService.getCartCount()
    this.cartService.cartCount.subscribe(d=>{
      console.warn("-------d---",d);
      this.totalCartItem=d
    })
  }

  searchProduct(e:any){
    this._Search.sendToSearchProduct(e.target.value);
  }
  

}
