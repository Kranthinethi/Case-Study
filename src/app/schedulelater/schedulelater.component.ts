import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedulelater',
  templateUrl: './schedulelater.component.html',
  styleUrls: ['./schedulelater.component.css']
})
export class SchedulelaterComponent implements OnInit {

  categories=["Sedan","SUV","HatchBack","others"];
  services=["Basic(default)","Premium","Elite"];
  constructor() { }

  ngOnInit(): void {
  }

}
