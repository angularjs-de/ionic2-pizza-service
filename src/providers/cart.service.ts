import {EventEmitter, Injectable} from '@angular/core';

import {Pizza} from '../models/pizza.model';
import {CartItem} from '../models/cart-item.model';

@Injectable()
export class CartService {
  private cart: CartItem[] = [];
  public statusChanged = new EventEmitter<{type: string; totalCount: number}>();

  getCart(): CartItem[] {
    return this.cart;
  };

  addCartItem(pizza: Pizza): void {
    this.cart.push({
      name: pizza.name,
      price: pizza.price
    });
    this.statusChanged.emit({
      type: 'add',
      totalCount: this.cart.length
    });
  };

  removeCartItem(index): void {
    this.cart.splice(index, 1);
    this.statusChanged.emit({
      type: 'remove',
      totalCount: this.cart && this.cart.length ? this.cart.length : 0
    });
  };

  calcTotalSum(): number {
    let sum = 0;

    if (!this.cart || !this.cart.length) {
      return sum;
    }

    for (let i = 0; i < this.cart.length; i = i + 1) {
      sum = sum + this.cart[i].price;
    }

    return sum;
  }
}