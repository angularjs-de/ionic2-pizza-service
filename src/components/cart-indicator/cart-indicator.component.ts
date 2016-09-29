import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CartService} from '../../providers';


@Component({
  selector: 'cart-indicator',
  template: `
    <button clear (click)="handleClick($event)" ion-button icon-only>
      <ion-icon
        name="cart"
        [attr.danger]="itemRemoved ? '' : null"
        [attr.favorite]="itemAdded ? '' : null"
      >
      </ion-icon>
    </button>
  `
})
export class CartIndicatorComponent implements OnInit {
  itemAdded = false;
  itemRemoved = false;
  totalCount = 0;
  statusDelay = 500;
  @Output() wasClicked = new EventEmitter();

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    // Show changed status
    this.cartService
      .statusChanged
      .distinctUntilChanged()
      .subscribe(data => {
        this.totalCount = data.totalCount;

        if (data.type === 'add') {
          this.itemAdded = true;
        } else {
          this.itemRemoved = true;
        }

        setTimeout(() => {
          this.itemAdded = false;
          this.itemRemoved = false;
        }, this.statusDelay);

      });
  }

  handleClick($event): void {
    this.wasClicked.emit($event);
  }
}