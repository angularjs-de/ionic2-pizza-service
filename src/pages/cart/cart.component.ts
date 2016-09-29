import {Component, OnInit} from '@angular/core';

import {AlertController} from 'ionic-angular';

import {CartService} from '../../providers';
import {CartItem} from '../../models';

@Component({
  templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  constructor(private cartService: CartService, private alertCtrl: AlertController) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  ionViewDidEnter(): void {
    if (this.cart.length) {
      return;
    }

    let alert = this.alertCtrl.create({
      title: '<b>Dein Warenkorb ist leer!</b>',
      subTitle: 'Füge zuerst Produkte aus Unserem Angebot zu Deinem Warenkorb hinzu.',
      buttons: ['OK']
    });
    setTimeout(() => alert.present(), 300);
  }

  calcTotalSum() {
    return this.cartService.calcTotalSum();
  }

  removeFromCart(index: number): void {
    this.cartService.removeCartItem(index);
  }
}
