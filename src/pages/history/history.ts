import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import {VerificationPage} from '../verification/verification';
import {PendingpaymentPage} from '../pendingpayment/pendingpayment';
import {ActivePage} from '../active/active';
import {ReinvestmentPage} from '../reinvestment/reinvestment';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  goToHomePage(){
    this.navCtrl.popTo(HomePage);
  }

  goToVerificationPage(){
    this.navCtrl.push(VerificationPage);
  }

  goToPendingPaymentPage(){
    this.navCtrl.push(PendingpaymentPage);
  }

    goToActivePage(){
      this.navCtrl.push(ActivePage);
    }

    goToReinvestmentPage(){
      this.navCtrl.push(ReinvestmentPage);
    }
}
