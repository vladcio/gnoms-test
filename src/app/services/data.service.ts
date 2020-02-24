import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected API_URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';


  constructor(
    protected http: HttpClient,
  ) { }

  fetchAll() {
    return this.http.get(this.API_URL);
  }
}
