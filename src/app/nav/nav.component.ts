import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  productsCounter : number = 0;
  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.getCounter().subscribe((data) => this.productsCounter = data);
  }

}
