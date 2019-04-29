//This library, platform-browser-dynamic, exist to compile on the browser.
// This library contains the client part that will proccess our
// templates, all our bindings and allow DI...
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


/// Angular Flow
// AppComponent as root Component, app-root
// index.html set the app-root
// Bootstrap our component in our module, AppModule
// Bootstrap ou module in our application, on main.ts