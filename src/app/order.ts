import { CarDetails } from "./CarDetails";
import { User } from "./userDetails";

export class orders
{
    constructor(
        public customerId:any,
        public customername:string,
        public customeremaiId:string,
        
        public  cardetails:CarDetails,
        public  washer:any,
        public status:string

    ){}
}

