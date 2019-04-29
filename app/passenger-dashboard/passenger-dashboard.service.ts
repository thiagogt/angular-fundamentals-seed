import {Passenger} from './models/Passenger.interface';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PassengerDashboardService{

    constructor(private http: Http){
        console.log(this.http);
    }
    getPassengers(): Passenger[]{

        return [{
            id:1,
            fullname: `Rose`,
            checkedIn: true,
            checkInDate: 201903110000
          },
          {
            id:2,
            fullname: `Beth`,
            checkedIn: true,
            checkInDate: 201904110000
          },{
            id:3,
            fullname: `Jhon`,
            checkedIn: false
          }];

    }
}

// ==== @Injectable() ====
// When we use some providers in our constructor, we need to inject them.
// What we need to do is to tell angular that some class is ready to be injected.
// We do that marking the class as Injectable one, so we can inject all http
// dependencies from the HttpModule declared at passenger-dashboard-module.