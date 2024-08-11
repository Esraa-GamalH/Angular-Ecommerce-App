import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProductsListComponent } from "./products-list/products-list.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ProductsListComponent, CartComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-ang-app';
}
