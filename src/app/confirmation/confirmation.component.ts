import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { orders } from '../order';
import { User } from '../userDetails';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  constructor(private http:HttpClient,private activaterouter:ActivatedRoute) { }
  customerId:any;
  carnumber:any;
  washerId:any;

  customer:any;
  car:any;
  washer:any;
  
  customername:any;
  customeremailId:any;
  
  order:any;

  ngOnInit(): void {
    setTimeout(() => {
      
    }, 2000);
             
   this.customerId=this.activaterouter.snapshot.paramMap.get("id");
   this.carnumber=this.activaterouter.snapshot.paramMap.get("carnumber");
   this.washerId=this.activaterouter.snapshot.paramMap.get("washerId");
  
   const _this=this;
   this.http.get("http://localhost:2001/user/findAllUsers/"+this.customerId)
            .subscribe((data)=>{
              _this.customer=data;
            });
            
  this.http.get("http://localhost:2001/carDetails/findcar/"+this.carnumber)
            .subscribe((data)=>{
              this.car=data; 
            }); 
  this.http.get("http://localhost:2003/washer/findAll/"+this.washerId)
            .subscribe((data)=>{
              this.washer=data;
            });
          
            setTimeout(() => {
              this.order=new orders(this.customerId,this.customer.username,this.customer.emailId,this.car,this.washer,"pending");
              console.log(this.order);
              this.http.post("http://localhost:2002/orders/addorders",this.order,{responseType:"text" as "json"})
    .subscribe((data)=>{
      console.log(data);
    });
            }, 1000);
          }
          
  
  selectedfunction(){


console.log(this.order); 
       
    
  }
}    
/* 
  */



  


