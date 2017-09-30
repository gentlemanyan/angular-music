import { Component } from '@angular/core';

@Component({
  selector: 'live-station',
  templateUrl: './live-station.component.html'
})

export class LiveStationComponent {
  constructor() {
    console.log( 'hello, live station' );
  }
}
