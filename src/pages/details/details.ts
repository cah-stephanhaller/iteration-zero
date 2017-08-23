import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarModel } from '../../models/calendar-model';
import { TimeSlotModel } from '../../models/timeslot-model';
import { DataProvider } from '../../providers/data/data';
import { WindowRefProvider } from '../../providers/window-ref/window-ref';

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

  private index: number;
  private calendarItems: CalendarModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider, public windowRefProvider: WindowRefProvider) {
    this.navCtrl = navCtrl;
    this.windowRefProvider = windowRefProvider;
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');

    let timeSlotModel: TimeSlotModel = this.dataService.getCalendarData()[this.index];
    if( null != timeSlotModel ) {
      this.calendarItems = timeSlotModel.calendarItems;
    }
    else {
      this.windowRefProvider.nativeWindow.location.href = '/';
    }
  }
}
