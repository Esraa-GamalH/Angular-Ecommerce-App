import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsRequestsService } from '../services/products-requests.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  productDetails: any;
  productinfo: any;

  constructor(private activatedRoute: ActivatedRoute,private router: Router , private productAPIrequests: ProductsRequestsService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productAPIrequests.getProductDetails(id).subscribe(
      (data) => (this.productDetails = data), 
      (error) => {
        if (error.status === 404){
          this.router.navigate(['/']);
        }
      });
  }
}
