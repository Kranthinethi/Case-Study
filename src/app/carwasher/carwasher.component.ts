import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carwasher',
  templateUrl: './carwasher.component.html',
  styleUrls: ['./carwasher.component.css']
})
export class CarwasherComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  message:any
  orders:any;
  washerid:any;
  washer:any

  displayorder=true;
  displaywasher=false;
  ngOnInit(): void {
     this.washerid=this.router.snapshot.paramMap.get("id");
    this.http.get("http://localhost:2002/orders/findwasher/"+this.washerid)
        .subscribe((data)=>{
          this.orders=data;
        })
     this.http.get("http://localhost:2003/washer/findAll/"+this.washerid)
     .subscribe((data)=>{
       this.washer=data
     })   


  }

  currentOrders(){
    console.log(this.orders);
    console.log(this.orders[1].cardetails.carnumber);
  }


  displayorders(){
    this.displayorder=false;
    this.displaywasher=true;

  }
  displaywashers(){
    this.displayorder=true;
    this.displaywasher=false;
  }
   
  sendEmail(email:any)
  {

    this.http.get("http://localhost:2002/orders/sendEmail/"+email,{responseType:"text" as "json"})
    .subscribe((data)=>this.message=data
    );
  }


}
