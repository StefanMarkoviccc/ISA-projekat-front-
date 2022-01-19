import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import { EditHouseComponent } from './edit-house/edit-house.component';
import { EditBoatComponent } from './edit-boat/edit-boat.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { InstructorHomePageComponent } from './instructor-home-page/instructor-home-page.component';
import { NewReservationsComponent } from './new-reservations/new-reservations.component';
import { OccupancyCalendarComponent } from './occupancy-calendar/occupancy-calendar.component';
import { QuickBookingComponent } from './quick-booking/quick-booking.component';
import { ReportCompletedReservationsComponent } from './report-completed-reservations/report-completed-reservations.component';
import { RequestDeleteAccountComponent } from './request-delete-account/request-delete-account.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationListClientProfileComponent } from './reservation-list-client-profile/reservation-list-client-profile.component';
import { UpdatesPersonalInformationsComponent } from './updates-personal-informations/updates-personal-informations.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HouseProfileComponent } from './house-profile/house-profile.component';
import { AvailabilityPeriodComponent } from './availability-period/availability-period.component';
import { CreateAvailabilityPeriodHouseComponent } from './create-availability-period-house/create-availability-period-house.component';
import { HouseBookingHistoryComponent } from './house-booking-history/house-booking-history.component';
import { AdventureProfileComponent } from './adventure-profile/adventure-profile.component';
import { AddAdventureComponent } from './add-adventure/add-adventure.component';
import { BoatProfileComponent } from './boat-profile/boat-profile.component';
import { HouseAvailabilityPeriodComponent } from './house-availability-period/house-availability-period.component';
import { CreateAvailabilityPeriodBoatComponent } from './create-availability-period-boat/create-availability-period-boat.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ActionHouseComponent } from './action-house/action-house.component';
import { ClientReservationPageComponent } from './client-reservation-page/client-reservation-page.component';
import { ComplainPageComponent } from './complain-page/complain-page.component';
import { ActionBoatComponent } from './action-boat/action-boat.component';
import { MakeHouseReservationClientComponent } from './make-house-reservation-client/make-house-reservation-client.component';
import { SeeReservationsClientComponent } from './see-reservations-client/see-reservations-client.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { SeeAllComplainsComponent } from './see-all-complains/see-all-complains.component';
import { DisableAccountRequestPageComponent } from './disable-account-request-page/disable-account-request-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
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
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'edit-house', component: EditHouseComponent},
  {path: 'edit-boat', component: EditBoatComponent},
  {path: 'client-home-page', component: ClientHomePageComponent},
  {path: 'instructor-home-page', component: InstructorHomePageComponent},
  {path: 'new-reservations', component: NewReservationsComponent},
  {path: 'quick-booking', component: QuickBookingComponent},
  {path: 'occupancy-calendar', component: OccupancyCalendarComponent},
  {path: 'report-completed-reservations', component: ReportCompletedReservationsComponent},
  {path: 'request-delete-account', component: RequestDeleteAccountComponent},
  {path: 'reservation-list', component: ReservationListComponent},
  {path: 'reservation-list-client-profile', component: ReservationListClientProfileComponent},
  {path: 'updates-personal-informations', component: UpdatesPersonalInformationsComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'house-profile', component: HouseProfileComponent},
  {path: 'create-avaliability-period-house', component: CreateAvailabilityPeriodHouseComponent},
  {path: 'house-booking-history', component: HouseBookingHistoryComponent},
  {path: 'adventure-profile', component: AdventureProfileComponent},
  {path: 'add-adventure', component: AddAdventureComponent},
  {path: 'boat-profile', component: BoatProfileComponent},
  {path: 'house-avaliability-period', component: HouseAvailabilityPeriodComponent},
  {path: 'create-boat-availability-period', component: CreateAvailabilityPeriodBoatComponent},  
  {path: 'client-reservation-page', component: ClientReservationPageComponent},
  {path: 'complain-page', component: ComplainPageComponent},
  {path: 'create-room', component:CreateRoomComponent},
  {path: 'action-house', component: ActionHouseComponent},
  {path: 'client-reservation-page', component: ClientReservationPageComponent},
  {path: 'action-boat', component: ActionBoatComponent},
  {path: 'make-house-reservation-client', component: MakeHouseReservationClientComponent},
  {path: 'see-reservations-client', component: SeeReservationsClientComponent},
  {path: 'admin-home-page', component: AdminHomePageComponent},
  {path: 'see-all-complains', component: SeeAllComplainsComponent},
  {path: 'disable-account-request-page', component: DisableAccountRequestPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
