import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TechnicalRequestDomain } from './technical-request.domain';

@Injectable({
  providedIn: 'root',
})
export class TechnicalRequestDomainSubjectService {
  private subject = new BehaviorSubject<TechnicalRequestDomain>(null);

  next(value: TechnicalRequestDomain) {
    this.subject.next(value);
  }

  getValue(): TechnicalRequestDomain {
    return this.subject.getValue();
  }

  asObservable(): Observable<TechnicalRequestDomain> {
    return this.subject.asObservable();
  }
}
