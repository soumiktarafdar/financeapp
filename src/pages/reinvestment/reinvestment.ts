import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {InvestmentPage} from '../investment/investment';

/**
 * Generated class for the ReinvestmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reinvestment',
  templateUrl: 'reinvestment.html',
})
export class ReinvestmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReinvestmentPage');
  }

  goToInvestmentPage(){
    this.navCtrl.push(InvestmentPage);
  }

}
