import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './userDetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public register(user:User):Observable<any> 
  {
    return this.http.post("http://localhost:2001/user/adduser",user,{responseType:'text' as 'json'})
  }
  
  public loginUser(emailId:string):Observable<any> 
  {
    return this.http.get("http://localhost:2001/user/findByEmailId/"+emailId)
  }
  
  
  



}
