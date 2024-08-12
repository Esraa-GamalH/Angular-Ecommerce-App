import { Component, Input } from '@angular/core';
import {IData} from '../../dummyData';
import { CartService } from '../services/cart.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input () product!: IData;
  productCounter !: number;
  isActive : boolean = false;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.getCounter().subscribe((data) => this.productCounter = data);
  }

  increasePCounter(){
    this.cartService.setCounter(this.productCounter + 1);
  }

  changeFavIcon(){
    this.isActive = !this.isActive;
    console.log(this.isActive);
    
  }
  
}
