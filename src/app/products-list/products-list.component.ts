import { Component } from '@angular/core';
// import * as productsList from '../../../public/assets/products.json';
import {dummyData, IData} from '../../dummyData';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products : IData[] = dummyData;
  

}
