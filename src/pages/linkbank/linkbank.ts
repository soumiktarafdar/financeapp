import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DetailsPage} from '../details/details';
import {ConfirmPage} from '../confirm/confirm';

/**
 * Generated class for the LinkbankPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-linkbank',
  templateUrl: 'linkbank.html',
})
export class LinkbankPage {

  showHide: false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinkbankPage');
  }

  goToDetailsPage(){
    this.navCtrl.push(DetailsPage);
  }

  goToConfirmPage(){
    this.navCtrl.push(ConfirmPage);
  }
}
