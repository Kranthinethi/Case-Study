import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { BookingprocessComponent } from './bookingprocess/bookingprocess.component';
import { CarwasherComponent } from './carwasher/carwasher.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditWasherComponent } from './edit-washer/edit-washer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { RegistrationComponent } from './registration/registration.component';
import { SchedulelaterComponent } from './schedulelater/schedulelater.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WasherloginComponent } from './washerlogin/washerlogin.component';

const routes: Routes = [
 {path:"",redirectTo:"homepage",pathMatch:"full"},
 {path:"userlogin/userdashboard/:id",component:UserdashboardComponent},
  {path:"login/booking/:id",component:BookingComponent},
  {path:"login/booking/:id/selectwasher/:carnumber",component:BookingprocessComponent},
  {path:"booking",component:BookingComponent},
  {path:"schedule" ,component:UserLoginComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"register" ,component:RegistrationComponent},
  {path:"edit/admin/:id",component:EditUserComponent},
  {path:"edit/:id",component:EditUserComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"login/admin",component:AdminComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"washerlogin",component:WasherloginComponent},
  {path:"washerlogin/washer/:id",component:CarwasherComponent},
  {path:"editwasher/:id",component:EditWasherComponent},
  {path:"editwasher/admin/:id",component:EditWasherComponent},
  {path:"confirmation",component:ConfirmationComponent},
  {path:"paymentgateway",component:PaymentgatewayComponent},
  {path:"login/booking/:id/selectwasher/:carnumber/confirmation/:washerId" ,component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
