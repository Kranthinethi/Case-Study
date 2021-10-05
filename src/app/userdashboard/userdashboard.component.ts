import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  users:any;
  displayusers=false;
  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  ngOnInit(): void {
   let userId= this.router.snapshot.paramMap.get("id")
    let resp= this.http.get("http://localhost:2001/user/findAllUsers/"+userId);
    resp.subscribe(data=>this.users=data);
  }
  getUser(){
    this.displayusers=false;
    console.log(this.users);
    if(this.users.length>0)
    {
      return "success";
    }
    else{
      return "Failed"
    }
   }

}
