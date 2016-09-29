import {Component, OnInit} from '@angular/core';

import {NavParams} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

import {PizzaService} from '../../providers';
import {Pizza} from '../../models';

@Component({
  templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private navParams: NavParams,
    private pizzaService: PizzaService
  ) {}

  ngOnInit(): void {
    this.pizzaService
      .getPizza(this.navParams.get('id'))
      .toPromise()
      .then(pizza => this.pizza = pizza);
  }
}
