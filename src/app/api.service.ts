import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080";


  houseOwnerRegistration(data: any) {
    return this.http.post(this.url + '/api/users/register/house-owner', data);
  }
  boatOwnerRegistration(data: any) {
    return this.http.post(this.url + '/api/users/register/boat-owner', data);
  }
  fishingInstructorRegistration(data: any) {
    return this.http.post(this.url + '/api/users/register/fishing-instructor', data);
  }
  clientRegistration(data: any) {
    return this.http.post(this.url + '/api/users/register/client', data);
  }
  createHouse(data: any){
    return this.http.post(this.url + '/api/houses', data);
  }
}

