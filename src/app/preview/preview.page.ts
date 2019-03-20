import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})

export class PreviewPage {

  constructor(private storage: Storage, private router: Router) {}


  async finish() {
    await this.storage.set('tutorialComplete', true);
    this.router.navigateByUrl('/login');
  }

}
