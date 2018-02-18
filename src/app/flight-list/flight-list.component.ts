import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  public flightData: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    const date = new Date();
    const scheduleDate = [
      date.getFullYear(),
      `0${(date.getMonth() + 1)}`.slice(-2),
      `0${(date.getDate())}`.slice(-2),
    ].join('-');
    const scheduleTime = `${date.getHours()}:${date.getMinutes()}`;
    const flightListQuery = gql`
      query FlightListQuery($scheduleDate: String, $scheduleTime: String) {
        flights(scheduleDate: $scheduleDate, scheduleTime: $scheduleTime) {
          flightName
          scheduleTime
          destinationConnection {
            city
            country
          }
          airlineConnection {
            publicName
          }
        }
      }
    `;

    this.flightData = this.apollo.watchQuery({
      query: flightListQuery,
      variables: {
        scheduleDate,
        scheduleTime
      },
      fetchPolicy: 'cache-first'
    });
  }

  refetch () {
    this.flightData.refetch();
  }
}
