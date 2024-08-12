import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IData } from '../../dummyData';
import { ProductComponent } from '../product/product.component';
import { CartProductComponent } from '../cart-product/cart-product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent, CartProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  counter :number =0;
  products :IData[] = [];

  constructor(private cartService: CartService){}

  // ngOnInit(){
  //   this.cartService.getCounter().subscribe((data) => this.counter = data);
  // }
  ngOnInit(){
    this.cartService.getCounter().subscribe((data) => this.counter = data);
    console.log(this.cartService.getItems());
    this.products=this.cartService.getItems();
  }

  calculateSum(){
    let sum=0;
    for(let i=0;i<this.products.length;i++)
    {
      sum+=this.products[i].count*this.products[i].price;
    }
    return sum;
  }
}
