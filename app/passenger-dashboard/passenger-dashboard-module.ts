import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

//container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

//comnponent
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

//service
import {PassengerDashboardService} from './passenger-dashboard.service';
import { PassengerFormsComponent } from './components/pasenger-forms/passenger-forms.component';


/* this route is working as root for this.
const routes: Route[] =[{
    path: "passengers",
    component: PassengerDashboardComponent
}];
The above route, use childs. THe first child set
as default (path: '') has the same behaviour as the 
route one descrived before*/

const routes: Route[] = [{
    path: "passengers",
    children: [{
        path: '',
        component: PassengerDashboardComponent
    },
    {
        path:':id',
        component: PassengerViewerComponent
    }]
}]

@NgModule({
    declarations:[
        //containers
        PassengerDashboardComponent,
        PassengerViewerComponent,
        //components
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormsComponent
    ],
    imports:[
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    // this is nedded withour the routerModule
    //exports:[
        //PassengerDashboardComponent,
        //We don't need to export PassengerCountComponent or PassengerDetailComponent
        // because PassengerDashboardComponent already imports it and we are exporting,
        // it, in other words, they are childs of PassengerDashboardComponent. 
        //  BUT THIS DOES NOT WORKS. I NEED TO EXPORT EVERY COMPONENT IF I WANT TO
        // USE OUTSIDE MY MODULE!

        //PassengerViewerComponent
//],
    providers:[
        PassengerDashboardService
    ]
})

export class PassengerDashboardModule{

}


// ====== forChild ======
// This means that PassengerDashboardComponent became child and
// all its component will be rendered with this module. Because of that
// it does not need to export it anymore.