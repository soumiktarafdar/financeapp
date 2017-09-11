import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PreferencePage} from '../preference/preference';
import {HistoryPage} from '../history/history';

/**
 * Generated class for the InvestmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-investment',
  templateUrl: 'investment.html',
})
export class InvestmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestmentPage');
  }

  goToPreferencePage(){
    this.navCtrl.push(PreferencePage);
  }

  goToHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }

}
