import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data:any;
  esActivo = false;
  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private cartService: CartService, public afAuth: AngularFireAuth, public navCtrl: NavController) { }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
   
  }
 
  addToCart(product) {
    this.cartService.addProduct(product); 
    this.esActivo = true;
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
      };
    }, 1000);
  }

  community(){
    this.navCtrl.navigateRoot('/community');
  }

}