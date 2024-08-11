import { Component, Input } from '@angular/core';
import {IData} from '../../dummyData';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input () product!: IData;
  
  
}
