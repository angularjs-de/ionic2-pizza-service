import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { PizzaAppComponent } from './app.component';
import { OrderComponent } from '../pages/order/order.component';
import { CartComponent } from '../pages/cart/cart.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { AboutModalComponent } from '../components/about/about-modal.component';
import { CartIndicatorComponent } from '../components/cart-indicator/cart-indicator.component';

import { CartService, PizzaService } from '../providers';
import { PizzaSearchPipe } from '../pipes';

@NgModule({
  declarations: [
    PizzaAppComponent,
    OrderComponent,
    CartComponent,
    DetailComponent,
    AboutModalComponent,
    CartIndicatorComponent,
    PizzaSearchPipe
  ],
  imports: [
    IonicModule.forRoot(PizzaAppComponent, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PizzaAppComponent,
    OrderComponent,
    DetailComponent,
    CartComponent,
    AboutModalComponent
  ],
  providers: [CartService, PizzaService]
})
export class AppModule {}
