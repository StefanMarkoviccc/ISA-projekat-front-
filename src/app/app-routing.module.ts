import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component'; 
import { HouseViewComponent } from './house-view/house-view.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { BoatViewComponent } from './boat-view/boat-view.component';
import { InstructorViewComponent } from './instructor-view/instructor-view.component';
import { CreateBoatComponent } from './create-boat/create-boat.component';
import { CreateBoatAppointmentComponent } from './create-boat-appointment/create-boat-appointment.component';
import { HouseOwnerHomePageComponent } from './house-owner-home-page/house-owner-home-page.component';
import { BoatOwnerHomePageComponent } from './boat-owner-home-page/boat-owner-home-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'houseView', component: HouseViewComponent},
  {path: 'create-house', component: CreateHouseComponent},
  {path: 'create-appointment', component: CreateAppointmentComponent },
  {path: 'boatView', component: BoatViewComponent},
  {path: 'instructorView', component: InstructorViewComponent},
  {path: 'create-boat', component: CreateBoatComponent},
  {path: 'create-boat-appointment', component: CreateBoatAppointmentComponent},
  {path: 'house-owner-home-page', component: HouseOwnerHomePageComponent},
  {path: 'boat-owner-home-page', component: BoatOwnerHomePageComponent},
  {path: 'edit-profile', component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
