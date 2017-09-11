import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {InvestmentPage} from '../investment/investment';
import {ForgotPage} from '../forgot/forgot';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   //registerPage = RegisterPage;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToInvestmentPage(){
    this.navCtrl.push(InvestmentPage);
  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

  goToForgotPasswordPage(){
    this.navCtrl.push(ForgotPage);
  }
}
