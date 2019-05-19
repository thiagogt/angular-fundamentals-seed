import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Route} from '@angular/router'

import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard-module' 

import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const route: Route[] =[
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
]

 @NgModule({
   declarations: [
     AppComponent,
     HomeComponent,
     NotFoundComponent
   ],
   imports: [
     BrowserModule,
     FormsModule,
     PassengerDashboardModule,
     RouterModule.forRoot(route)
   ],
   bootstrap: [AppComponent]
 })
export class AppModule {}