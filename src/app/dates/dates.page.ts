import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  envia(){
    this.router.navigate(['pago']);
  }

}
