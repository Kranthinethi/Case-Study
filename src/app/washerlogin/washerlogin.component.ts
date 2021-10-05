import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-washerlogin',
  templateUrl: './washerlogin.component.html',
  styleUrls: ['./washerlogin.component.css']
})
export class WasherloginComponent implements OnInit {

  
  washers:any;
  washeremail:string=""
  washerpass:string="";


  message:any;
  hasTrue:boolean=false;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  public signin(){
    this.http.get("http://localhost:2003/washer/findByEmailId/"+this.washeremail)
    .subscribe((data)=>{
      this.washers=data;
      console.log(data);
      if(this.washers.length===0 || this.washers.password!=this.washerpass)
      {
        this.message="Login Failed!!!"
      }
      for (const washer of this.washers) {
        if(washer.password===this.washerpass)
        {
          console.log(washer.password)
          this.message="Login Successful"
          if(true)
          {
            console.log(washer.id);
            this.router.navigate(["washerlogin/washer/"+washer.id]);
          }
        }
      }
    });

    
  }

}
