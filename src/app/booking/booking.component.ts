import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../CarDetails';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  categories=["Sedan","SUV","HatchBack","others"];
  services=["Basic(default)","Premium","Elite"];
  response:any;
  disable=true;
  selectHasError=true

  cardetails=new CarDetails("","","","default","","default","","");
  
  constructor(private http:HttpClient,private route:Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(car:CarDetails)
  {
       this.http.post("http://localhost:2001/carDetails/addcar",car,{responseType:'text' as 'json'})
       .subscribe(data=>{
         this.response=data
         if(this.response!="car number already exists please specify correct details")
         this.disable=false;
        });
  }
  validateSelect(value:string)
  {
    if(value==="default")
    {
      this.selectHasError=true;
    }
    else{
      this.selectHasError=false;
    }
  }



}
