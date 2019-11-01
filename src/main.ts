import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import {ShareService} from './app/typings';
import { formatNumber } from '@angular/common';
//import { Cesium } from './app/typings';
//import { Cesium } from './app/typings';
//if (environment.production) {
 // enableProdMode();
//}
import * as cesium from "cesium";
declare var Cesium;
window['CESIUM_BASE_URL'] = '/assets/cesium/';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNGM2MmQ0YS02NjJjLTQ5YWEtYTM4Zi1mYzMwZDk0OGI3ZDIiLCJpZCI6MTAxMTcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTU2NzA3NTF9.k6R983S4fJLVXA-SVnlAJIqk5cp0zx3eNmcpl4AnQvM';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  