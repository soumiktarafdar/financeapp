import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HistoryPage} from '../history/history';

/**
 * Generated class for the ActivePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-active',
  templateUrl: 'active.html',
})
export class ActivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }

  goToHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }
}
