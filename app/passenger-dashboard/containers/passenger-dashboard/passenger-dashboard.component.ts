import {Component, OnInit} from '@angular/core';

import {Passenger} from '../../models/Passenger.interface';

import {PassengerDashboardService} from '../../passenger-dashboard.service';

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
  <h1>leo meu amor</h1>
  <passenger-count
      [itens]="passengers">
      </passenger-count>  
  <passenger-detail
    *ngFor="let passenger of passengers"
    [detail]="passenger"
    (remove)="onHandleRemove($event)"
    (edit)="onHanldeEdit($event)">
    </passenger-detail>
    <div class="app" id="angular_pipes">
      
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          {{ i }} : {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <p>
            {{
              passenger.checkedIn
                ? (passenger.checkInDate | date: "yMMMMd" | uppercase)
                : "Not Checked In"
            }}
          </p>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{

    passengers: Passenger[];

    constructor(private passengerService:PassengerDashboardService){}

    ngOnInit(){
      this.passengerService.getPassengers().subscribe((data: Passenger[]) => this.passengers = data);  

    }

    onHandleRemove(event){
      console.log(event);
      this.passengers = this.passengers.filter((passenger:Passenger)=>{ 
        return passenger.id != event.id;
      });
    }

    //Here the type is set to show other way to declare a variable event in typescript.
    // Other part import is the Object.assign!!!!
    // It merges two objects, taking the most actual diference from the second argument, to the first one.
    onHanldeEdit(event: Passenger){
      
      this.passengers = this.passengers.map((passenger:Passenger)=>{ 
        if(passenger.id === event.id){
          passenger = Object.assign({},passenger, event);
        }
        
        return passenger;
      });
      console.log(this.passengers);
    }

}
// CONTAINERS =======================
// One of the containers attribute is that it contains
// data and renders statelles attributes.
// That why we separate the components inside the container
// in a different folder called container.


// ngOnInit - A life cycle hook ======
// Every data that should be loaded dinamically, shoul be
// loaded inside of this life cycle method, ngOnInit.

// Property component binding ========
//
//The same way we can use proeperty binding of an html element
// with [], we can do this to a custom angular component.
// This is exactly what [itens] of passanger-detail tag is.
