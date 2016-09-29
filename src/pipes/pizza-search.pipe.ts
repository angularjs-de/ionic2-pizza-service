import {Pipe, PipeTransform} from '@angular/core';

import {Pizza} from '../models';

@Pipe({
  name: 'pizzaSearch'
})
export class PizzaSearchPipe implements PipeTransform {
  transform(pizzas:Pizza[], searchString: string) : any {
    let matches: Pizza[] = [];

    if (!searchString) {
      return pizzas;
    }

    pizzas.forEach(function (pizza) {
      if (pizza.name.match(new RegExp(searchString, 'i'))) {
        matches.push(pizza);
      }
    });

    return matches;
  }
}