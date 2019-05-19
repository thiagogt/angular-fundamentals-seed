import {Passenger} from './models/Passenger.interface';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//Tentei usar esse throw, mas nao permitiu.
import 'rxjs/add/observable/throw';


const API_URL:string = 'api/passengers';


@Injectable()
export class PassengerDashboardService{

    constructor(private http: Http){
        console.log(this.http);
    }
    getPassengers(): Observable<Passenger[]>{

        return this.http
            .get(API_URL)
            .map(response => response.json())
            .catch(error => { throw('Erro:'+error.json()) });
        

    }

    getPassenger(id: number): Observable<Passenger>{

        return this.http
            .get(`${API_URL}/${id}`)
            .map(response => response.json())
            .catch(error => { throw('Erro:'+error.json()) });
        

    }

    updatePassenger(passenger:Passenger): Observable<Passenger>{

        return this.http
            .put(`${API_URL}/${passenger.id}`, passenger)
            .map(response => response.json());
        

    }

    deletePassenger(passenger:Passenger): Observable<Passenger[]>{

        return this.http
            .delete(`${API_URL}/${passenger.id}`)
            .map(response => response.json());
        

    }
}

// ==== @Injectable() ====
// When we use some providers in our constructor, we need to inject them.
// What we need to do is to tell angular that some class is ready to be injected.
// We do that marking the class as Injectable one, so we can inject all http
// dependencies from the HttpModule declared at passenger-dashboard-module.

// ======== `${API_URL}/${passenger.id}` =========
// This way of passing variables is the ECMA 6 way.
// It is equivalent to write API_URL + '/' + passenger.id