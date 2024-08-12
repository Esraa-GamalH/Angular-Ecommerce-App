import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(private activatedRoute: ActivatedRoute, private productAPIrequests: ActivatedRoute){}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    
    
  }
}
