import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TechnicalRequestModel } from '../technicalRequest.model';

@Injectable({
  providedIn: 'root',
})
export class GetTechnicalRequestListHttpService {
  constructor(private http: HttpClient) {}

  execute(): Observable<TechnicalRequestModel[]> {
    return this.http.get<TechnicalRequestModel[]>(
      'https://TechnicalRequestNodeAPI.darrenatienza.repl.co'
    );
  }
}
