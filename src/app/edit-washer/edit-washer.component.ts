import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-washer',
  templateUrl: './edit-washer.component.html',
  styleUrls: ['./edit-washer.component.css']
})
export class EditWasherComponent implements OnInit {

  message:any;
  errormsg="";
  id:any;
 
  haserror=true;
  washer:any;
  passwordValidation="";
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
   this.id= this.router.snapshot.paramMap.get("id")
    this.http.get("http://localhost:2003/washer/findAll/"+this.id)
    .subscribe((data)=>this.washer=data);

  }
  public update(Password:any,cPassword:any){

    if(Password!=cPassword)
    {
      
      this.passwordValidation="Password not Matched"
      console.log("Password not matched")
    }
    else{
      this.passwordValidation="";
      let resp=this.http.put("http://localhost:2003/washer/update/"+this.id,this.washer,{responseType:"text" as "json"});
      resp.subscribe((data)=>console.log(this.message=data));
      this.haserror=false;
      setTimeout(() => {
        this.message="you'll be redirected to dashboard "
      }, 3000);
      
      setTimeout(() => {
        if(this.route.url==="/editwasher/admin/"+this.id)
        {
          this.route.navigate(["/login/admin"]);
        }
        else{
          console.log(this.route.url);
        this.route.navigate(["washerlogin/washer/"+this.id])
        }
      }, 5000);
    }
   
  }

}
