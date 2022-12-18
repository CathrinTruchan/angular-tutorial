import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  items: Product[] = [];

addToCard(product: Product){
 this.items.push(product);
}

getItems() {
  return this.items; 
}

clearCart() {
this.items = [];
return this.items
}

getShippingPrices() {
  return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
}

}
