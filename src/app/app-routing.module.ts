import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component'; 
import { HouseViewComponent } from './house-view/house-view.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { BoatViewComponent } from './boat-view/boat-view.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'houseView', component: HouseViewComponent},
  {path: 'create-house', component: CreateHouseComponent},
  {path: 'boatView', component: BoatViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
