import {Component, Input} from '@angular/core';
import { Passenger } from '../../models/Passenger.interface';


/// ====== Stateless component ====
// A component without data, which needs someone to pass
// for it.
// It does not ahve lifecycle, and all its data came from other part.
// When you use @Input, you are telling angular that, the element which
// has it, will receive all data from outside this class.
@Component({
    selector: 'passenger-count',
    template:`
    <div>
    <h1>Passenger Detail</h1>
    <div>
    Total passengers: {{totalCheckIn()}} / {{itens?.length}}
    </div>
    </div>`
})
export class PassengerCountComponent{
    
    @Input()
    itens:Passenger[];

    totalCheckIn(){
        if(!this.itens) return;
        return this.itens.filter((passenger: Passenger) => {
            return passenger.checkedIn;
        }).length;
    }
}


//@Input ===============
//
// Tells angular that this property should be 
// use for Input binding