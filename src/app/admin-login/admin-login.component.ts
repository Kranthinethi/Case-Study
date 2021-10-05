import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { admins } from '../admins';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router:Router) { }

  adminmail:string=""
  adminpass:string="";

  
  admin=new admins("admin01@gmail.com","admin123");
  message:any;
  hasTrue:boolean=false;
  

  ngOnInit(): void {
  }
  public signin(){
    
      console.log(this.admin);
      if(this.admin.password!=this.adminpass)
      {
        this.message="Login Failed!!!"
      }
   
      if(this.admin.password===this.adminpass)
        {
          console.log(this.admin.password)
          this.message="Login Successful"
          this.router.navigate(["login/admin"]);
        }
      }
   

    
  }

