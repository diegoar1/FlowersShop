import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {
  data:any;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
      };
    }, 1000);
  }
  envia(){
    this.router.navigate(['pago']);
  }

}
