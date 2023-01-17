import { Pipe, PipeTransform } from '@angular/core';
import { productInfo } from '../products/product-info';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products:any[],SearchString:string):any[] {
    // console.warn(products,SearchString);
    if(SearchString==''){
      return products;
    }else{
    let result:productInfo[]=[]
    result=products.filter((prod)=>{
      if(prod.title.toLocaleLowerCase().includes(SearchString.toLocaleLowerCase())){
        return prod;
      }
    })
    return result;
  }
}

}

// if(this.searchItem.length>0){
//   this.PopularProducts = []
//   console.warn("----------",this.searchItem);
  
//    let productList1=this.productList?.filter((prod:any) => {
//      if(this.searchItem=='')
//      {
//        return prod;
//      }
//      else if(prod.title.toLocaleLowerCase().includes(this.searchItem.toLocaleLowerCase())){
//       // this.productList?.push(prod)
//       return prod;
//       console.warn("------prod=",prod);
//     }
//   })
//   this.productList=[]
//   this.productList=productList1;
//   console.warn("productList1=",productList1);
  
// }
