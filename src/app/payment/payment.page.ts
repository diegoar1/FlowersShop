import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  data:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
      };
    }, 1000);
  }

  pagar(){
    this.router.navigate(['notification']);
  }

}
