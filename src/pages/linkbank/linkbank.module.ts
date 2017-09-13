import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkbankPage } from './linkbank';

@NgModule({
  declarations: [
    LinkbankPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkbankPage),
  ],
})
export class LinkbankPageModule {}
