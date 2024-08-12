import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IData } from '../../dummyData';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  private counter = new BehaviorSubject<number>(0);
  private items : IData[] =[]; 

  constructor() {};

  addToCart(newProduct: IData) {
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].id==newProduct.id){
        this.items[i].count+=1;
        return;
      }
    }
    newProduct.count= 1;
    this.items.push(newProduct);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(newCounter: number){
    this.counter.next(newCounter);
  }
}
