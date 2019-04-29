import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

//container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';


//comnponent
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

//service
import {PassengerDashboardService} from './passenger-dashboard.service';

@NgModule({
    declarations:[
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports:[
        CommonModule,
        HttpModule
    ],
    exports:[
        PassengerDashboardComponent,
        //We don't need to export PassengerCountComponent or PassengerDetailComponent
        // because PassengerDashboardComponent already imports it and we are exporting,
        // it, in other words, they are childs of PassengerDashboardComponent. 
        //  BUT THIS DOES NOT WORKS. I NEED TO EXPORT EVERY COMPONENT IF I WANT TO
        // USE OUTSIDE MY MODULE!
    ],
    providers:[
        PassengerDashboardService
    ]
})

export class PassengerDashboardModule{

}
