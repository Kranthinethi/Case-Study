import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../userDetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orders:any;
  users:any;
  carwashers:any;

  displayusers=false;
  displaywashers=true;
  displayorders=true;

  randomnumber:any;
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
   
    this.http.get("http://localhost:2002/orders/findOrders")
    .subscribe((data)=>this.orders=data);
    
  }
   getAllUsers(){
    this.displayusers=false;
    this.displaywashers=true;
    this.displayorders=true;
    let resp= this.http.get("http://localhost:2001/user/findAllUsers");
    resp.subscribe(data=>this.users=data);
    
    
    console.log(this.users);
   
   }
   getAllWashers(){
     this.displaywashers=false;
     this.displayusers=true;
     this.displayorders=true;
     let resp=this.http.get("http://localhost:2003/washer/findAll");
     resp.subscribe(data=>this.carwashers=data);
     console.log(this.carwashers);
   }

    allOrders(){
     this.displayusers=true;
     this.displaywashers=true;
     this.displayorders=false;
     
     console.log(this.orders)
   }

   deleteOrder(id:any){
     console.log(id);
           this.http.delete("http://localhost:2002/orders/deleteorder/"+id,{responseType:"text" as "json"})
           .subscribe((data)=>console.log(data));
   }

   
}
