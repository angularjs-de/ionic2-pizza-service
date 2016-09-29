import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import {Pizza} from '../models/pizza.model';

@Injectable()
export class PizzaService {

  constructor(private http: Http) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get('assets/pizza.json')
      .delay(2000)
      .map((res: Response) => res.json());
  }

  getPizza(id): Observable<Pizza> {
    return this.http
      .get('assets/pizza.json')
      .map((res: Response) => res.json())
      .map((pizzas: Pizza[]) => {
        for (let pizza of pizzas) {
          if (pizza.id === id) {
            return pizza;
          }
        }
      });
  }
}