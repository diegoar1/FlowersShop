import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import * as shuffleArray from 'shuffle-array';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  encourageUsageMessages = [
    `Hey, usa la app otra vez`,
    `Missed ypu, come back`,
    `prueba 3`,
    `prueba 4`,
    `prueba 5`,
    `prueba 6`,
  ];
  constructor(
    private platform: Platform, 
    private splashScreen: SplashScreen, 
    private statusBar: StatusBar, 
    private localNotifications: LocalNotifications
    ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      shuffleArray(this.encourageUsageMessages).forEach((message, index) => {
        this.localNotifications.schedule({
          id: index,
          text: message,
          trigger: {
            in: 1 + index * 2,
            unit: ELocalNotificationTriggerUnit.SECOND,
          }
        });
      });
    });
  }
}
