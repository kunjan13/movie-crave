
import { Component, OnInit, AfterViewInit } from '@angular/core';
import "../../../assets/js/custom.js"

declare var myExtObject: any;
@Component({
  selector: 'movcrav-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})


export class HomeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    myExtObject.func1();
  }

}
