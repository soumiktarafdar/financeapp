import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PrefresultPage} from '../prefresult/prefresult';
import {LinkbankPage} from '../linkbank/linkbank';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  goToPrefresultPage(){
    this.navCtrl.push(PrefresultPage);
  }

  goToLinkbankPage(){
    this.navCtrl.push(LinkbankPage);
  }
}
