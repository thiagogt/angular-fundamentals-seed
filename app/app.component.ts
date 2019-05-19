import { Component } from '@angular/core';

// After some exercises,this interface 
//is moved to passenger-dashboard/models
interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number
};


@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template:`
    <!-- <div id="one_way_data_binding">
      <input 
        type="text" 
        [value]="name"
        (input)="handleInput($event)">
      <div> 
      {{name}}
      </div>
    </div>
    <div id="one_way_data_binding_with_ngModel">
      <input 
        type="text" 
        [ngModel]="name"
        (ngModelChange)="handleChange($event)">
      <div>
      {{name}}
      </div>
    </div>
    <div id="Two_way_data_binding_with_ngModel">
      <input 
        type="text" 
        [(ngModel)]="name"
      >
      <div>
      {{name}}
      </div>
    </div>
    <div id="Two_way_data_binding_with_ngModel">
      <input 
        type="text" 
        #username
      >
      <button (click)="handleCLick(username.value)">
      Get value by reference
      </button>
    </div>
    <div id="one_way_ng_if">
      <input 
        type="text" 
        [value]="name"
        (input)="handleInput($event)">
      <div *ngIf="name.lenght">
      Searching for...{{name}}
      </div>
    </div>
    <div id="ng_for_sugar_sintax">
      <h5>Airline passangers</h5>
      <ul>
      <template ngFor let-passenger let-i="index" [ngForOf]="passengersList">
        <li>
          {{i}} : {{passanger.fullname}}
        </li>
        </template>
      </ul>
    </div>
    <div id="ng_for_original">
      <h5>Airline passangers</h5>
      <ul>
        <li *ngFor="let passenger of passengersList; let i = index">
          {{i}} : {{passanger.fullname}}
        </li>
      </ul>
    </div>
    <div class="app" id="class_property_binding">
      <h5>Airline passangers</h5>
      <ul>
        <li *ngFor="let passenger of passengersList; let i = index">
        <span 
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
          {{i}} : {{passenger.fullname}}
        </li>
      </ul>
    </div>
    <div class="app" id="ng_class">
      <h5>Airline passangers</h5>
      <ul>
        <li *ngFor="let passenger of passengersList; let i = index">
        <span 
          class="status"
          [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out':!passenger.checkedIn
        }"></span>
          {{i}} : {{passenger.fullname}}
        </li>
      </ul>
    </div>
    <div class="app" id="style_property_binding">
      <h5>Airline passangers</h5>
      <ul>
        <li *ngFor="let passenger of passengersList; let i = index">
        <span 
          class="status"
          [style.backgroundColor]= "passenger.checkedIn ? '#2ecc71': '#ffc9ff'"></span>
          {{i}} : {{passenger.fullname}}
        </li>
      </ul>
    </div>
    <div class="app" id="ng_style">
      <h5>Airline passangers</h5>
      <ul>
        <li *ngFor="let passenger of passengersList; let i = index">
        <span 
          class="status"
          [ngStyle]="{
            backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#ffc9ff'),
            borderRadius: (passenger.checkedIn ? '50%':  '0%')
        }"></span>
          {{i}} : {{passenger.fullname}}
        </li>
      </ul>
    </div>
    <div class="app" id="angular_pipes">
      <h5>Airline passangers</h5>
      <ul>
        <li *ngFor="let passenger of passengersList; let i = index">
          {{i}} : {{passenger.fullname}}
          <p>{{passenger | json}}</p>
          <p>{{passenger.checkedIn ? (passenger.checkInDate | date:'yMMMMd' | uppercase) : 'Not Checked In'}}</p>
        </li>
      </ul>
    </div>
        Daqui para frente entramos no modulo de componentizacao
        da aplicacao. Todo o codigo começou a ser retirado daqui.-->
    <!--<div class  ="app">
    <passenger-dashboard></passenger-dashboard>
    </div>
        Daqui para frente entra a parte de Forms
    
    <div class  ="app">
    <passenger-viewer></passenger-viewer>
    </div>-->

    <div class="app">
    <nav class="nav">
        <a routerLink="/"
            routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}">Home</a>
         
        <a routerLink="/oops"
        routerLinkActive="active"
      >404</a>
      <a routerLink="/passengers"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact: true}"
      >Passenger</a> 
    </nav>
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  name:string ='';
  passengersList:Passenger[] = [{
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

  handleInput(event: any){
    this.name = event.target.value;
  }

  handleChange(value: string){
    this.name = value;
  }

  handleCLick(value: string){
    this.name = value;
  }
}

//INTERPOLATION : the link that occours bettwen an expression, {{...}} and a
//                component variavle is called interpolation.

// {{titlw}} is called sugar syntax, because it make an original code more cleaner.
// The same wau to do that is binding as JS does:  <div [innerHTML]="title" >. This is calles
// property binding and represents the flow ordering of the binding: JS -> html template node-> property.
// Wnat angular is doing, is looking into JS the property to binding in this html node.
// This is called one way data binding!

// Another binding that is possible to be made is event binding.
// For instance, lets say we want to get when an input is clicked, or get blur...
// The syntax is quite diffent, because use a () instead a [] as in parameter binding.

// Using the FormsModule from @angular, we can use the two ways data
//binding. But it is best to use it only for input only, or text area
// for example, instead in components, because it is easier to manage
// the flow and the state of your components with one-way data binding.

// Another way to bind stuff in angular, is to use '#ref template'.
// Basically it creates a reference at a DOM node and use it to access 
// its propertys. Actually its exports the value of some DOM node with
// some #ref

//<template> or <ng-template> for ng>5
//Its a web components element in html that the framework
//allows you to use. You can reuse it, as much as you
//want.

//*ngIF
//This ngIf is just a sugar sintax for
//<template [ngIf]=.... 

//interface
// Basically is just a virtual object,
// a type that you want to create.(A Struct) 

// *ngFor
// index is the index provided by angular

// ngClass ou [class.<css class name>] sets the css class 
//if the expression is true. 
// ngClass allows multiples expressions, possibiliting multiple
// style scenarios.

// ngStyle or [style.property] has the same bahaviour described above
// but with style property html node. Just be attempt to the camel case
// syntax, instead  `-` !

// With pipes, we can concateneted it like calling multiple functions 
// in a sequence. But it needs to be made carefully, because if called
// in a wrongly sequency, it could thrown a error.
// For instance, if date was called after uppercase, it throw an error
// because it will try to uppercase checkInDate and is not possible to uppercase a number


// ======== routerLinkActiveOptions =========
// exact: true => Give the option to set the active class just when fullfill
// the path proposition. Which in the example is "/"

// Architeture details============================

// Smart components
// Comunicate with services, Render child components

// Dumb Components
//Accept data via inputs. Emits data changes via event outputs

// One way dataflow - created  with one way data flow.
// Data flows down; Events emit up!!!
// A dumb component emit an event up, like a change of some input, for instance.
// after it came at the smart component, it will update its childs to update it data
// and so as its childs, going down into the component three.