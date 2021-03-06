import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 
  selectedItems = [];
  t=0;
  total = 0;
 
  constructor(private cartService: CartService, public navCtrl: NavController) { }
 
  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }
 
  checkout() {
    this.navCtrl.navigateRoot('/dates');
  }
}