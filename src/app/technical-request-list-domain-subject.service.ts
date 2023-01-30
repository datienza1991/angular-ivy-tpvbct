import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TechnicalRequestListDomain } from './technical-request-list.domain';
import { TechnicalRequestModel } from './technicalRequest.model';

@Injectable({
  providedIn: 'root',
})
export class TechnicalRequestListDomainSubjectService {
  private subject = new BehaviorSubject<TechnicalRequestListDomain>(null);

  next(value: TechnicalRequestListDomain) {
    this.subject.next(value);
  }

  getValue(): TechnicalRequestListDomain {
    return this.subject.getValue();
  }

  asObservable(): Observable<TechnicalRequestListDomain> {
    return this.subject.asObservable();
  }
}
