import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PreferencePage } from '../pages/preference/preference';
import { HistoryPage } from '../pages/history/history';
import { ReinvestmentPage } from '../pages/reinvestment/reinvestment';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

   @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<any>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Preference', component: PreferencePage, icon: 'ios-home' },
      { title: 'Investment History', component: HistoryPage, icon: 'ios-home' },
      { title: 'Reinvestment', component: ReinvestmentPage, icon: 'ios-home' },
      { title: 'Settings', component: SettingsPage, icon: 'ios-home' },
      { title: 'Logout', component: HomePage, icon: 'ios-home' }
    ];
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
    
}

