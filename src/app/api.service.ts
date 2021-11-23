import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  url = "http://localhost:8080";


  houseOwnerRegistration(data: any) {
    return this.http.post(this.url + '/api/users/register/...', data);
  }

  createHouse(data: any){
    return this.http.post(this.url + '/api/houses' + data.id, data);
  }
}

