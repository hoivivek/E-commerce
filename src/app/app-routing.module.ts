import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path : "", redirectTo : "home", pathMatch: "full"},
  {path : "home", component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : "products", component : ProductsComponent},
  {path : "account", component : AccountComponent},
  {path : "register", component : RegisterComponent},
  {path : "delivery", component : DeliveryComponent},
  {path : "orders", component : OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
