import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { th } from 'date-fns/locale';

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
  createHouseAvailabilityPeriod(data: any){
    return this.http.post(this.url + '/api/houseAvailabilityPeriods', data, this.generateHeader());
  }
  createBoatAvailabilityPeriod(data: any){
    return this.http.post(this.url + '/api/boatAvailabilityPeriods', data, this.generateHeader());
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
  getClients(data: any){
    return this.http.get(this.url + '/api/users/clients', this.generateHeader());
  }
  getHouse(data: any){
    return this.http.get(this.url + '/api/houses/' + data.id, this.generateHeader());
  }
  getHouses(data: any){
    return this.http.get(this.url + '/api/houses?search='+ data.search, this.generateHeader());
  }
  getAvailabilityForHouse(data: any){
    return this.http.get(this.url + '/api/houseAvailabilityPeriods/' + data.id, this.generateHeader());
  }
  getRoomsForHouse(data: any){
    return this.http.get(this.url + '/api/rooms/house/' + data.id, this.generateHeader());
  }
  getAvailabilityForBoat(data: any){
    return this.http.get(this.url + '/api/boatAvailabilityPeriods/' + data.id, this.generateHeader());
  }
  getActionForHouse(data: any){
    return this.http.get(this.url + '/api/appointments/actions/' + data.id, this.generateHeader());
  }
  getAppointmentFroBoat(data: any){
    return this.http.get(this.url + '/api/boatAppointments/boat/' + data.id, this.generateHeader());
  }
  getActionForBoat(data: any){
    return this.http.get(this.url + '/api/actionBoats/' + data.id, this.generateHeader());
  }
  createBoat(data: any){
    return this.http.post(this.url + '/api/boats', data, this.generateHeader());
  }
  createRoom(data: any){
    return this.http.post(this.url + '/api/rooms', data, this.generateHeader());
  }
  createAdventure(data: any){
    return this.http.post(this.url + '/api/adventures', data, this.generateHeader());
  }
  createAppointment(data: any){
    return this.http.post(this.url + '/api/appointments', data, this.generateHeader());
  }
  createBoatAppointment(data: any){
    return this.http.post(this.url + '/api/boatAppointments', data, this.generateHeader());
  }
  createActionHouse(data: any){
    return this.http.post(this.url + '/api/actionHouses', data, this.generateHeader());
  }
  createActionBoat(data: any){
    return this.http.post(this.url + '/api/actionBoats', data, this.generateHeader());
  }
  editBoat(data: any){
    return this.http.put(this.url + '/api/boats/' + data.id, data, this.generateHeader());
  }
  editAdventure(data: any){
    return this.http.put(this.url + '/api/adventure/' + data.id, data, this.generateHeader());
  }
  getBoat(data: any){
    return this.http.get(this.url + '/api/boats/' + data.id, this.generateHeader());
  }
  getBoats(data: any){
    return this.http.get(this.url + '/api/boats?search='+ data.search, this.generateHeader());
  }
  getAdventures(data: any){
    return this.http.get(this.url + '/api/adventures/', this.generateHeader());
  }

  getAdventureImages(data: any){
    return this.http.get(this.url + '/api/adventureImages/' + data.id, this.generateHeader());
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
  createBoatImage(data: any) {
    return this.http.post(this.url + '/api/boatImages', data, this.generateHeader())
  }
  failAComplain(data: any) {
    return this.http.post(this.url + '/api/complains/', data, this.generateHeader())
  }
  searchByDate(data: any) {
    return this.http.post(this.url + '/api/houses/search', data,this.generateHeader())
  }
  getAppointmentsByUser(data: any) {
    return this.http.get(this.url + '/api/appointments/user/' + data.id, this.generateHeader())
  }
  isAppointmentFinished(data: any){
    return this.http.get(this.url + '/api/appointments/appointment/' + data.id, this.generateHeader())
  }
  getAppointmentsByHouse(data: any) {
    return this.http.get(this.url + '/api/appointments/house/' + data.id, this.generateHeader())
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
    return this.http.get(this.url + '/api/rooms', this.generateHeader());
  }
  getIsHouseTaken(data: any){
    return this.http.get(this.url + '/api/api/houses/house/' + data.id, this.generateHeader());
  }
  createAppointmentReport(data: any){
    return this.http.post(this.url + '/api/appointmentReports', data, this.generateHeader() )
  }
}

