import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationService } from './user-registration.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingComponent } from './booking/booking.component';
import { SchedulelaterComponent } from './schedulelater/schedulelater.component';
import { AdminComponent } from './admin/admin.component';
import { BookingprocessComponent } from './bookingprocess/bookingprocess.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CarwasherComponent } from './carwasher/carwasher.component';
import { WasherloginComponent } from './washerlogin/washerlogin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { EditWasherComponent } from './edit-washer/edit-washer.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserLoginComponent,
    HomepageComponent,
    BookingComponent,
    SchedulelaterComponent,
    AdminComponent,
    BookingprocessComponent,
    ConfirmationComponent,
    CarwasherComponent,
    WasherloginComponent,
    AdminLoginComponent,
    UserdashboardComponent,
    EditUserComponent,
    PaymentgatewayComponent,
    EditWasherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
