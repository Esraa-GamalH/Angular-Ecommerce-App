import { Component } from '@angular/core';
// import * as productsList from '../../../public/assets/products.json';
import {IData} from '../../dummyData';
import { ProductComponent } from "../product/product.component";
import { ProductsRequestsService } from '../services/products-requests.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products : IData[] = [];
  
  constructor(private productsAPIService : ProductsRequestsService){}

  ngOnInit(){
    this.productsAPIService.getProductsList().subscribe((data: any)=> this.products = data.products);
  }

}
