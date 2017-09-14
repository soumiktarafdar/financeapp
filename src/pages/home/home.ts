import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

    showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Login Alert',
      message: 'Are you sure you want to login?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.push(InvestmentPage);
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

 /* goToInvestmentPage(){
    this.navCtrl.push(InvestmentPage);
  }*/

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

  goToForgotPasswordPage(){
    this.navCtrl.push(ForgotPage);
  }
}
