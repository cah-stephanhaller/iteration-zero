import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { TimeSlotModel } from '../../models/timeslot-model';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timeSlots: TimeSlotModel[] = [];

  constructor(public navCtrl: NavController, public dataService: DataProvider, public platform: Platform) {
    this.navCtrl = navCtrl;
    this.dataService = dataService;
    this.platform = platform;
  }

  ionViewDidLoad() {
    this.timeSlots = this.dataService.getCalendarData();
  }

  goToDetails(index: number): void {
    this.navCtrl.push('DetailsPage', {
      index: index
    });
  }
}
