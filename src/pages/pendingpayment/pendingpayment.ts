import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HistoryPage} from '../history/history';

/**
 * Generated class for the PendingpaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendingpayment',
  templateUrl: 'pendingpayment.html',
})
export class PendingpaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingpaymentPage');
  }

    goToHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }
}
