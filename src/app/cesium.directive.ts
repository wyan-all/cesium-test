import { Directive, OnInit, ElementRef } from '@angular/core';
//import { Cesium } from './typings';
//import * as myCesium from './typings';
import * as cesium from 'cesium';
declare var Cesium;
@Directive({
 selector: 'appCesium'
})
export class CesiumDirective implements OnInit {
 
 constructor(private el: ElementRef) { }

 ngOnInit() {
  // Put initialization code for the Cesium viewer here
 // Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNGM2MmQ0YS02NjJjLTQ5YWEtYTM4Zi1mYzMwZDk0OGI3ZDIiLCJpZCI6MTAxMTcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTU2NzA3NTF9.k6R983S4fJLVXA-SVnlAJIqk5cp0zx3eNmcpl4AnQvM';

 // var viewer = new Cesium.Viewer('cesiumContainer');    
  const viewer = new Cesium.Viewer(this.el.nativeElement);
 }

}