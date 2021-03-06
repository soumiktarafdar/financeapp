import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PreferencePage} from '../preference/preference';
import {DetailsPage} from '../details/details';
/**
 * Generated class for the PrefresultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prefresult',
  templateUrl: 'prefresult.html',
})
export class PrefresultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrefresultPage');
  }

  goToPreferencePage(){
    this.navCtrl.popTo(PreferencePage);
  }

  goToDetailsPage(){
    this.navCtrl.push(DetailsPage);
  }
}
