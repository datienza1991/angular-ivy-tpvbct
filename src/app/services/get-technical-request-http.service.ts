import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://reqres.in';
@Injectable({
  providedIn: 'root',
})
export class GetTechnicalRequestHttpService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://TechnicalRequestNodeAPI.darrenatienza.repl.co'
    );
  }
  getData2(url) {
    return this.http.get(API_URL + '/api/' + url);
  }
}
