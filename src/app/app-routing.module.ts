import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHouseComponent } from './create-house/create-house.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent},
  { path: 'create-house', component: CreateHouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
