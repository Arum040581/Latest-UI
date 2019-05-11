import 'zone.js/dist/zone';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
