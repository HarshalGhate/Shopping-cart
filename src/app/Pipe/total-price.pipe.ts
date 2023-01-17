import { Pipe, PipeTransform } from '@angular/core';
import { productInfo } from '../products/product-info';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(product:any,) {
    // console.warn("Total Price---",product[0]);
    let TotalPrice=0;
    let TotalQuantity=0;
    for(let i=0;i<product.length;i++){
      TotalPrice+=product[i].totalPrice;
      TotalQuantity+=product[i].quantity
    }
    // return TotalPrice.toFixed(2);
    return `${TotalPrice.toFixed(2)}`
  }

}
