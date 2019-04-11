import { Component, OnInit } from '@angular/core';
import { TripCalService } from '../trip-cal.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public TripData: Array<any>;
  public currentTripData: any;

  constructor(private tripCalService: TripCalService) {
    tripCalService.get().subscribe((data: any) => this.TripData = data);
    this.currentTripData = this.setInitialValuesForTripData();
  }

  private setInitialValuesForTripData() {
    return {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    }
  }

  public createOrUpdateTrip = function (trip: any) {
    // if trip is present in TripData, we can assume this is an update
    // otherwise it is adding a new element
    let tripWithId;
    tripWithId = _.find(this.TripData, (el => el.id === trip.id));

    if (tripWithId) {
      const updateIndex = _.findIndex(this.TripData, { id: tripWithId.id });
      this.workoutService.update(trip).subscribe(
        tripRecord => this.TripData.splice(updateIndex, 1, trip)
      );
    } else {
      this.workoutService.add(trip).subscribe(
        tripRecord => this.TripData.push(trip)
      );
    }

    this.currentTripData = this.setInitialValuesForTripData();
  };

  public editClicked = function (record) {
    this.currentTripData = record;
  };

  public newClicked = function () {
    this.currentTripData = this.setInitialValuesForTripData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.TripData, { id: record.id });
    this.tripCalService.remove(record).subscribe(
      result => this.TripData.splice(deleteIndex, 1)
    );
  }

  ngOnInit() {
  }

}
