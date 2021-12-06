import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { HouseViewComponent } from './house-view/house-view.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import {MatDatepicker} from "@angular/material/datepicker"
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from "@angular/material/checkbox"
import { BoatViewComponent } from './boat-view/boat-view.component';
import { InstructorViewComponent } from './instructor-view/instructor-view.component';
import { CreateBoatComponent } from './create-boat/create-boat.component';
import { CreateBoatAppointmentComponent } from './create-boat-appointment/create-boat-appointment.component';
import { HouseOwnerHomePageComponent } from './house-owner-home-page/house-owner-home-page.component';
import { BoatOwnerHomePageComponent } from './boat-owner-home-page/boat-owner-home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { EditBoatComponent } from './edit-boat/edit-boat.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateHouseComponent,
    HomeComponent,
    RegistrationComponent,
    HouseViewComponent,
    CreateAppointmentComponent,
    BoatViewComponent,
    InstructorViewComponent,
    CreateBoatComponent,
    CreateBoatAppointmentComponent,
    HouseOwnerHomePageComponent,
    BoatOwnerHomePageComponent,
    ClientHomePageComponent,
    EditProfileComponent,
    EditHouseComponent,
    EditBoatComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
