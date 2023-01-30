import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TechnicalRequestModel } from './technicalRequest.model';

@Injectable({
  providedIn: 'root',
})
export class TechnicalRequestModelSubjectService {
  private subject = new BehaviorSubject<TechnicalRequestModel>(null);

  next(value: TechnicalRequestModel) {
    this.subject.next(value);
  }

  getValue(): TechnicalRequestModel {
    return this.subject.getValue();
  }

  asObservable(): Observable<TechnicalRequestModel> {
    return this.subject.asObservable();
  }
}
