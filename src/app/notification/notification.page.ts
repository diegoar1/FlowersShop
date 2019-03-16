import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  lat:number
  lon:number
  total:string

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.lat = resp.coords.latitude
      this.lon = resp.coords.longitude

      let latMadrid = 21.1747528;
      let lonMadrid = -86.8639315;

      this.total = this.calculateDistance(this.lon, lonMadrid, this.lat, latMadrid)+"KM";
      

     }).catch((error) => {
       console.log('Error getting location', error);
     });

      //let watch = this.geolocation.watchPosition();
      //watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      //data.coords.latitude
      //data.coords.longitude
      //});
  };

  calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return Math.trunc(dis);
  };

}
