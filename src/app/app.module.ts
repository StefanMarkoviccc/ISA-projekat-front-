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
import { InstructorHomePageComponent } from './instructor-home-page/instructor-home-page.component';
import { AvailabilityPeriodComponent } from './availability-period/availability-period.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationListClientProfileComponent } from './reservation-list-client-profile/reservation-list-client-profile.component';
import { QuickBookingComponent } from './quick-booking/quick-booking.component';
import { ReportCompletedReservationsComponent } from './report-completed-reservations/report-completed-reservations.component';
import { NewReservationsComponent } from './new-reservations/new-reservations.component';
import { OccupancyCalendarComponent } from './occupancy-calendar/occupancy-calendar.component';
import { UpdatesPersonalInformationsComponent } from './updates-personal-informations/updates-personal-informations.component';
import { RequestDeleteAccountComponent } from './request-delete-account/request-delete-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdventureReservationComponent } from './adventure-reservation/adventure-reservation.component';
import { HouseProfileComponent } from './house-profile/house-profile.component';
import { CreateAvailabilityPeriodHouseComponent } from './create-availability-period-house/create-availability-period-house.component';
import { HouseBookingHistoryComponent } from './house-booking-history/house-booking-history.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { InstructorProfilComponent } from './instructor-profil/instructor-profil.component';
import { AdventureProfileComponent } from './adventure-profile/adventure-profile.component';
import { AddAdventureComponent } from './add-adventure/add-adventure.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BoatProfileComponent } from './boat-profile/boat-profile.component';
import { HouseAvailabilityPeriodComponent } from './house-availability-period/house-availability-period.component';
import { CreateAvailabilityPeriodBoatComponent } from './create-availability-period-boat/create-availability-period-boat.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ActionHouseComponent } from './action-house/action-house.component';
import { ClientReservationPageComponent } from './client-reservation-page/client-reservation-page.component';
import { ComplainPageComponent } from './complain-page/complain-page.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionBoatComponent } from './action-boat/action-boat.component';
import { MakeHouseReservationClientComponent } from './make-house-reservation-client/make-house-reservation-client.component';
import { SeeReservationsClientComponent } from './see-reservations-client/see-reservations-client.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { SeeAllComplainsComponent } from './see-all-complains/see-all-complains.component';
import { DisableAccountRequestPageComponent } from './disable-account-request-page/disable-account-request-page.component';
import { MakeBoatAppointmentClientComponent } from './make-boat-appointment-client/make-boat-appointment-client.component';


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
    LoginComponent,
    InstructorHomePageComponent,
    AvailabilityPeriodComponent,
    ReservationListComponent,
    ReservationListClientProfileComponent,
    QuickBookingComponent,
    ReportCompletedReservationsComponent,
    NewReservationsComponent,
    OccupancyCalendarComponent,
    UpdatesPersonalInformationsComponent,
    RequestDeleteAccountComponent,
    ChangePasswordComponent,
    AdventureReservationComponent,
    HouseProfileComponent,
    CreateAvailabilityPeriodHouseComponent,
    HouseBookingHistoryComponent,
    InstructorProfilComponent,
    AdventureProfileComponent,
    AdventureProfileComponent,
    AdventureReservationComponent,
    AddAdventureComponent,
    BoatProfileComponent,
    HouseAvailabilityPeriodComponent,
    CreateAvailabilityPeriodBoatComponent,
    ClientReservationPageComponent,
    ComplainPageComponent,
    CreateRoomComponent,
    ActionHouseComponent,
    ClientReservationPageComponent,
    ActionBoatComponent,
    MakeHouseReservationClientComponent,
    SeeReservationsClientComponent,
    AdminHomePageComponent,
    SeeAllComplainsComponent,
    DisableAccountRequestPageComponent,
    MakeBoatAppointmentClientComponent,

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
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
