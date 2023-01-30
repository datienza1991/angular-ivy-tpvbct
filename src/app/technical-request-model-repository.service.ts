import { Injectable } from '@angular/core';
import { TechnicalRequestListDomain } from './technical-request-list.domain';
import { TechnicalRequestModelSubjectService } from './technical-request-model-subject.service';
import { TechnicalRequestDomain } from './technical-request.domain';
import { TechnicalRequestModel } from './technicalRequest.model';

@Injectable({
  providedIn: 'root',
})
export class TechnicalRequestModelRepositoryService {
  constructor(
    private technicalRequestModelSubjectService: TechnicalRequestModelSubjectService
  ) {}

  getTechnicalRequestModelDomain(): TechnicalRequestDomain {
    const array = this.technicalRequestModelSubjectService.getValue();
    return new TechnicalRequestDomain(array);
  }

  save(technicalRequestModel: TechnicalRequestModel) {
    this.technicalRequestModelSubjectService.next(technicalRequestModel);
  }
}
