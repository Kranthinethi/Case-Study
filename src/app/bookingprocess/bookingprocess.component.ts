import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingprocess',
  templateUrl: './bookingprocess.component.html',
  styleUrls: ['./bookingprocess.component.css']
})
export class BookingprocessComponent implements OnInit {
  carwashers:any;
  constructor(private http:HttpClient) { }
  selected:any;
  show:boolean=true;
  displaydatetime=true;
  selectedId:any;

  ngOnInit(): void {
      let resp=this.http.get("http://localhost:2003/washer/findAll");
      resp.subscribe(data=>this.carwashers=data);
      console.log(this.carwashers);
  }

  radioChange(event:any){
    this.show=false;
    this.selected=event.target.value;
    console.log(event.target.id);
    this.selectedId=event.target.id;
  }

  showDateTime(){
this.displaydatetime=false;
  }

}
