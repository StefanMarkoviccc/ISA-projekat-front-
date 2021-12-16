import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8081";

  login(data: any) {
    return this.http.post(this.url + '/api/users/login', data);
  }

  getCurrentUser() {
    return this.http.get(this.url + '/api/users/current', this.generateHeader());
  }

  houseOwnerRegistration(data: any) {
    return this.http.post(this.url + '/api/users/house-owner', data, this.generateHeader());
  }
  boatOwnerRegistration(data: any) {
    return this.http.post(this.url + '/api/users/boat-owner', data, this.generateHeader());
  }
  fishingInstructorRegistration(data: any) {
    return this.http.post(this.url + '/api/users/fishing-instructor', data, this.generateHeader());
  }
  clientRegistration(data: any) {
    return this.http.post(this.url + '/api/users/client', data, this.generateHeader());
  }
  createHouse(data: any){
    return this.http.post(this.url + '/api/houses', data, this.generateHeader());
  }
  deleteHouse(data: any){
    return this.http.delete(this.url + '/api/houses/' + data.id, this.generateHeader());
  }
  deleteBoat(data: any){
    return this.http.delete(this.url + '/api/boats/' + data.id, this.generateHeader());
  }
  editHouse(data: any){
    return this.http.put(this.url + '/api/houses/' + data.id, data, this.generateHeader());
  }
  editProfile(data: any){
    return this.http.put(this.url + '/api/users/' + data.id, data, this.generateHeader());
  }
  changePassword(data: any){
    return this.http.put(this.url + '/api/users/change-password', data, this.generateHeader());
  }
  getUser(data: any){
    return this.http.get(this.url + '/api/users/' + data.id, this.generateHeader());
  }
  getHouse(data: any){
    return this.http.get(this.url + '/api/houses/' + data.id, this.generateHeader());
  }
  getHouses(data: any){
    return this.http.get(this.url + '/api/houses?search='+ data.search, this.generateHeader());
  }
  createBoat(data: any){
    return this.http.post(this.url + '/api/boats', data, this.generateHeader());
  }
  createAppointment(data: any){
    return this.http.post(this.url + '/api/appointments', data, this.generateHeader());
  }
  editBoat(data: any){
    return this.http.put(this.url + '/api/boats/' + data.id, data, this.generateHeader());
  }
  getBoat(data: any){
    return this.http.get(this.url + '/api/boats/' + data.id, data);
  }
  getBoats(data: any){
    return this.http.get(this.url + '/api/boats?search='+ data.search, this.generateHeader());
  }
  getAdventures(data: any){
    return this.http.get(this.url + '/api/adventures/', this.generateHeader());
  }

  getHouseImages(data: any){
    return this.http.get(this.url + '/api/houseImages/' + data.id, this.generateHeader());
  }
  getBoatImages(data: any){
    return this.http.get(this.url + '/api/boatImages/' + data.id, this.generateHeader());
  }

  createImage(data: any) {
    return this.http.post(this.url + '/api/houseImages', data, this.generateHeader())
  }

  generateHeader() : any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }
  getAllRooms(data: any){
    return this.http.post(this.url + '/api/rooms', data);
  }
}

