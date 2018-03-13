import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  marks;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ResultPage: ' + this.navParams.get('marks'));
    this.marks = this.navParams.get('marks')

  }

}
