import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  message:any;
  errormsg="";
  id:any;
 
  haserror=true;
  user:any;
  passwordValidation="";
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
   this.id= this.router.snapshot.paramMap.get("id")
    this.http.get("http://localhost:2001/user/findAllUsers/"+this.id)
    .subscribe((data)=>this.user=data);

  }
  public update(Password:any,cPassword:any){

    if(Password!=cPassword)
    {
      
      this.passwordValidation="Password not Matched"
      console.log("Password not matched")
    }
    else{
      this.passwordValidation="";
      let resp=this.http.put("http://localhost:2001/user/update/"+this.id,this.user,{responseType:"text" as "json"});
      resp.subscribe((data)=>console.log(this.message=data));
      this.haserror=false;
      setTimeout(() => {
        this.message="you'll be redirected to dashboard "
      }, 3000);
      
      setTimeout(() => {
        if(this.route.url==="/edit/admin/"+this.id)
        {
          this.route.navigate(["/login/admin"]);
        }
        else{
        this.route.navigate(["userlogin/userdashboard/"+this.id])
        }
      }, 5000);
    }
   
  }

}
