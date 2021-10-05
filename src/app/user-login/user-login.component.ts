import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../userDetails';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  users:any;
  userEmail:string=""
  userPass:string="";


  message:any;
  hasTrue:boolean=false;
  constructor(private service:UserRegistrationService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
 
  }
  public login(){
    this.http.get("http://localhost:2001/user/findByEmailId/"+this.userEmail)
    .subscribe((data)=>{
      this.users=data;
      console.log(data);
      if(this.users.length===0 || this.users.password!=this.userPass)
      {
        this.message="Login Failed!!!"
      }
      for (const user of this.users) {
        if(user.password===this.userPass)
        {
          console.log(user.password)
          this.message="Login Successful"
          if(true)
          {
            console.log(user.id);
            this.router.navigate(["userlogin/userdashboard/"+user.id]);
          }
        }
      }
    });
   
    return "success";
    
  }

}
