import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:'',redirectTo:'product',pathMatch:'full'
  },
  {
    path:'product',component:ProductsComponent
  },
  {
    path:'details/:id',component:ProductDetailsComponent
  },
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
