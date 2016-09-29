import {Component, ViewChild} from '@angular/core';

import {App, ModalController, Nav, Platform, ToastController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import 'rxjs/add/operator/distinctUntilChanged';

import {CartComponent} from '../pages/cart/cart.component';
import {AboutModalComponent} from '../components/about/about-modal.component';
import {OrderComponent} from '../pages/order/order.component';

import {CartService} from '../providers';

@Component({
  templateUrl: './app.component.html'
})
export class PizzaAppComponent {
  rootPage: any = OrderComponent;
  cartItemCount = 0;
  toastDuration = 500;
  private pages = {};
  @ViewChild(Nav) nav: Nav;

  constructor(
    private app: App,
    private platform: Platform,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private cartService: CartService
  ) {
    this.initializeApp();
    this.pages = {
      'OrderPage': OrderComponent,
      'CartPage': CartComponent
    };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // subscribe to cart changes
      this.cartService
        .statusChanged
        .subscribe(data => {
          this.cartItemCount = data.totalCount;

          const toastText = data.type === 'add' ? 'Erfolgreich hinzugefügt' : 'Erfolgreich entfernt';

          const toast = this.toastCtrl.create({
            message: toastText,
            duration: this.toastDuration
          });

          toast.present();
        });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openAboutModal() {
    const modal = this.modalCtrl.create(AboutModalComponent);
    modal.present()
  }

  openPage(pageName) {
    const component = this.pages[pageName];
    if (!component) {
      return;
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(component);
  }
}
