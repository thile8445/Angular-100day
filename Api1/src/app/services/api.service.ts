import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'https://api.unsplash.com/photos';
  constructor(private http: HttpClient) { }
  sendGetRequest() {

    return this.http.get(this.apiURL);
  }
}
