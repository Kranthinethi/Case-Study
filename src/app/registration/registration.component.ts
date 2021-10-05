import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../userDetails';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user=new User(1,"","","","",0);
  message:any="";
  errormsg="";
 
  haserror=true;

  passwordValidation="";
  constructor(private service:UserRegistrationService,private route:Router) { }

  ngOnInit(): void {
  }
  public register(Password:any,cPassword:any){

    if(Password!=cPassword)
    {
      
      this.passwordValidation="Password not Matched"
      console.log("Password not matched")
    }
    else{
      this.passwordValidation="";
      let resp=this.service.register(this.user);
      resp.subscribe((data)=>console.log(this.message=data));
      this.haserror=false;
      setTimeout(() => {
        this.message="Redirected to Login Page"
        this.route.navigate(["/userlogin"]);
      }, 2000);
    }
   
  
  }
  


}
