import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-or-update-team-expense',
  templateUrl: './addor-update-team-expense.component.html',
  styleUrls: ['./addor-update-team-expense.component.css']
})
export class AddorUpdateTeamExpenseComponent implements OnInit {
  @Output() TripCreated = new EventEmitter<any>();
  @Input() TripInfo: any;

  public buttonText = 'Save';


  constructor() {
    this.clearTripInfo();
    console.log(this.TripInfo.date);
  }

  ngOnInit() {
  }

  private clearTripInfo = function () {
    // Create an empty jogging object
    this.TripInfo = {
      id: undefined,
      name: '',
      location: 0
    };
  };

  public addOrUpdateTripRecord = function (event) {
    this.TripCreated.emit(this.TripInfo);
    this.clearTripInfo();
  };

}
