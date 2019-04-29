import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Passenger } from '../../models/Passenger.interface';


/// ====== Stateless component ====
// A component without data, which needs someone to pass
// for it.
// It does not ahve lifecycle, and all its data came from other part.
// When you use @Input, you are telling angular that, the element which
// has it, will receive all data from outside this class.
@Component({
    selector: 'passenger-detail',
    template:`
    <div>
    
    <div class="app" id="angular_pipes">
     
          <p *ngIf="!editing">{{ detail.fullname }}</p>
          <input *ngIf="editing"
              type="text"
              [value]="detail.fullname"
              (input)="onInputChange(name.value)"
          #name>
          <button
          (click)="toggleEditing()">
          Edit
          </button>
          <button
          (click)="removeElement()">
          Remove
          </button>

    </div>
    </div>`
})
export class PassengerDetailComponent implements OnChanges{
 
    editing:Boolean = false;

    @Input()
    detail: Passenger;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    //This function is called before ngOnInit.
    // It keeps a state before and a current one of some compoenent.
    // In this case, it detected every time detail changes it state.
    // since we are toogling it state, every time the button is pressed
    // ending the edition, it changes the detail state.
    // Using this to set the detail to it`s parent, just change the detail fullname
    // of the parent, after the end od the edition.
    ngOnChanges(change){
        if(change.detail){
            console.log('detail change')
        }

    }

    onInputChange(name:string){
        this.detail.fullname = name;
    }

    removeElement(){
        this.remove.emit(this.detail);
    }

    toggleEditing(){
        if(this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

}


//===== @Output() ====
// When this component needs to send a message that something changed
// on it, it uses a EventEmmit type object, with the @Output annotation.
// This way your component looks much more with an API, who receives a data
// and send some messages if something occours.

//====== ngOnChange =====