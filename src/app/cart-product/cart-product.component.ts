import { Component, Input } from '@angular/core';
import { IData } from '../../dummyData';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export class CartProductComponent {
  @Input () product!: IData;
  productCounter !: number;
  isActive : boolean = false;

  constructor(private cartService: CartService, private router: Router){}

  ngOnInit(){
    this.cartService.getCounter().subscribe((data) => this.productCounter = data);
  }

  addToCart(){
    this.cartService.setCounter(this.productCounter + 1);
    this.cartService.addToCart(this.product);
  }

  changeFavIcon(){
    this.isActive = !this.isActive;
    console.log(this.isActive);
    
  }

  handelRedirection(id : number){
    this.router.navigate(['/product-details', id]);
    
  }

}
