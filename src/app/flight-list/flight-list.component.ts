import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  public flightData: any;

  constructor() {}

  ngOnInit() {
    this.flightData = [
      {
        scheduleTime: '00:05',
        flightName: 'KL2598',
        airlineConnection: {
          publicName: 'KLM'
        },
        destinationConnection: {
          city: 'Sofia',
          country: 'Bulgaria'
        }
      }
    ]
  }
}
