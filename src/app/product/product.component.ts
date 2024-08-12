import { Component, Input } from '@angular/core';
import {IData} from '../../dummyData';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input () product!: IData;
  productCounter !: number;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.getCounter().subscribe((data) => this.productCounter = data);
  }

  increasePCounter(){
    this.cartService.setCounter(this.productCounter + 1);
  }

  
}
