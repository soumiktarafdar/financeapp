import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {InvestmentPage} from '../investment/investment';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   registerPage = RegisterPage;
    investmentPage = InvestmentPage;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToRegistration(){
    this.navCtrl.push(RegisterPage);
  }
}
