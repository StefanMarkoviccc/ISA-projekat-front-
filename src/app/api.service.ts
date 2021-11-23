import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080";


  houseOwnerRegistration(data: any) {
    return this.http.post(this.url + '/api/users/house-owner', data);
  }
  boatOwnerRegistration(data: any) {
    return this.http.post(this.url + '/api/users/boat-owner', data);
  }
  fishingInstructorRegistration(data: any) {
    return this.http.post(this.url + '/api/users/fishing-instructor', data);
  }
  clientRegistration(data: any) {
    return this.http.post(this.url + '/api/users/client', data);
  }
  createHouse(data: any){
    return this.http.post(this.url + '/api/houses', data);
  }
  editHouse(data: any){
    return this.http.put(this.url + '/api/houses/' + data.id, data);
  }
  editProfile(data: any){
    return this.http.put(this.url + '/api/users/' + data.id, data);
  }
  getHouse(data: any){
    return this.http.get(this.url + '/api/houses/' + data.id, data);
  }
}

