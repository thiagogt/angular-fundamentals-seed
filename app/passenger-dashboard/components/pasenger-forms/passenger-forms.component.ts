import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/Passenger.interface";
import { Baggage } from "../../models/Baggage.interface";

@Component({
  selector: "passenger-forms",
  styleUrls: ["passenger-forms.component.scss"],
  template: `
    <form #form="ngForm">
      <div>
        Form!!!
      </div>
      <input type="text"
         name="fullname"
         required
         #fullname="ngModel"
          [ngModel]="detail?.fullname" />
      <div *ngIf="fullname.errors?.required " > esse campo eh obrigatorio</div>    

      <input type="number"
       name="Id"
       #number="ngModel"
       [ngModel]="detail?.id" />
      <label>
        <input
          type="checkbox"
          name="checkIn"
          [value]="true"
          [ngModel]="detail?.checkin"
          (ngModelChange)="toggleCheckIn($event)"
        />
        YES
      </label>
      <label>
        <input
          type="checkbox"
          name="checkIn"
          [value]="false"
          [ngModel]="detail?.checkin"
        />
        NO
      </label>

      <div *ngIf="form.value.chekedIn">
      {{detail?.checkInDate}}
      </div>

      <div>
      <select 
      name="baggage"
      [ngModel]="detail?.baggage">
        <option *ngFor="let bag of baggage" 
          [value]="bag.key"
          [selected]="bag.key === detail?.baggage">
          {{bag.value}}
        </option>
      </select>
      <select 
      name="baggage"
      [ngModel]="detail?.baggage">
        <option *ngFor="let bag of baggage" 
          [ngValue]="bag.key">
          {{bag.value}}
        </option>
      </select>
    
      </div>


      <div>
        {{ form.value | json }}
        {{ fullname.error }}
        {{ number.error }}

        {{form.valid}}
      </div>
      <div>
        {{ detail | json }}
      </div>
      <button type="submmit" [disabled]="form.invalid">Update</button>
    </form>
  `
})
export class PassengerFormsComponent {
  @Input()
  detail: Passenger;

  @Input()
  baggage: Baggage[] = [{
    key: "None",
    value:"None baggage"
  },
  {
    key: "Hold",
    value:"Hold baggage"
  },
  {
    key: "Hand",
    value:"Hand baggage"
  },{
    key: "Hold and Hand",
    value:"Hold and Hand baggage"
  }
];

  toggleCheckIn(checkIn: Boolean) {
      if(checkIn)
        this.detail.checkInDate = +new Date();
  }
}



// ===== The directive ngForm =====
// It keeps track to all changes to the state of any
// element inside the form tag.

// ====== novalidate ======
// Tells it to not validate anything, because we gonna use
// angular built in validations.

// ======= ngModel =======
//  ngModel works besides binding value (like a [value] binding)
// it keeps track to all validate changes of the element.

// ======= name ========
// ngForm will identify any element that ir owns by its name.
// if inside the form has 3 elements with name defined like 'fullname, Id and checkIn', then
// form.value | json would show { "fullname": "Rose", "Id": 1, "checkIn" : true}
// IMPORTANT
//  Even if 2 elements has the same name, it will threat as just one
//  and both elements will interfer in the same value of the form.

// ======== ngValue and selected =======
// [ngValue] on option html tag has the same behaviour
// than [value] plus [selected]
// [selected] checks for the item param to fill initially the option.

// ========= Validations strategies ==========
// Dirty: Everytime a propertie changes, angular forms controll set it as
// DIRTY.
// Touched: When the user click and left the button, the element gains the 
// value of TOUCHED

// ======== export reference ========
// The '#' property, can export properties of an element.
// As an example, the ngModel property was exported to be used
// for others elements in the form.