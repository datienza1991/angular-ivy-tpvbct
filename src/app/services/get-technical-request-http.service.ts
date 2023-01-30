import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TechnicalRequestModel } from '../technicalRequest.model';

const API_URL = 'https://reqres.in';
@Injectable({
  providedIn: 'root',
})
export class GetTechnicalRequestHttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<TechnicalRequestModel[]> {
    return this.http.get<TechnicalRequestModel[]>(
      'https://TechnicalRequestNodeAPI.darrenatienza.repl.co'
    );
  }
  getData2(url) {
    return this.http.get(API_URL + '/api/' + url);
  }
}
