import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TechnicalRequestModel } from '../technicalRequest.model';

function generateGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const firstNames = ['Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];
function generateRandomName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

const generateRandomeNumber = () => Math.floor(Math.random() * 1000) + 1;

const data = {
  id: `${generateGUID()}`,
  name: `${generateRandomName()}`,
  selected: true,
  articles: [
    {
      id: `${generateGUID()}`,
      name: `${generateRandomName()}`,
      quantity: `${generateRandomeNumber()}`,
      selected: false,
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class AddTechnicalRequestHttpService {
  constructor(private http: HttpClient) {}

  execute(data: TechnicalRequestModel): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(
      'https://TechnicalRequestNodeAPI.darrenatienza.repl.co',
      data,
      { headers: headers }
    );
  }
}
