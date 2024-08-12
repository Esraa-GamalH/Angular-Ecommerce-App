import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  counter :number =0;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.getCounter().subscribe((data) => this.counter = data);
  }

  
}
