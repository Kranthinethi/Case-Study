import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getCustomer(customerId:any){
    return this.http.get("http://localhost:2001/user/findAllUsers/"+customerId)
  }
}
