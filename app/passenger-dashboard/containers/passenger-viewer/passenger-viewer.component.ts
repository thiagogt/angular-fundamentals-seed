import {Component, OnInit} from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/Passenger.interface';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: "passenger-viewer",
    styleUrls: ["passenger-viewer.component.scss"],
    template: `
    
    <button 
        (click)="goBack()">Go back</button>
    <passenger-forms
    [detail]="passenger">
    </passenger-forms>

    `
})

export class PassengerViewerComponent implements OnInit{


    passenger:Passenger;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService){

    }

    ngOnInit(){

        this.route.params
        .switchMap( (data: Passenger) => this.passengerService.getPassenger(data.id))
        .subscribe((data: Passenger) => this.passenger = data);
    }

    goBack() {
        this.router.navigate(['/passengers']);
    }
}


// ======= switchMap ========
// Works as subscribe, it listen for changes.
// This works perfectly for scenarios like typeaheads 
// where you are no longer concerned with the response 
// of the previous request when a new input arrives

// ======= imperative routing ======
// Using the native API to navigate to some page
// is called imperative routing.
// In this case you set exactly the path and not the component
// which should be loaded. (this.router.navigate(['/passengers']))