import { Pipe, PipeTransform } from '@angular/core';
import { productInfo } from '../products/product-info';

@Pipe({
  name: 'totalQuantity'
})
export class TotalQuantityPipe implements PipeTransform {

  transform(product:any,) {
    let TotalQuantity=0;
    for(let i=0;i<product.length;i++){
      TotalQuantity+=product[i].quantity
    }
    return TotalQuantity;
  }

}
