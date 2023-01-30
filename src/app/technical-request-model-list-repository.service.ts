import { Injectable } from '@angular/core';
import { TechnicalRequestListDomain } from './technical-request-list.domain';
import { TechnicalRequestModelListSubjectService } from './technical-request-model-list-subject.service';
import { TechnicalRequestModel } from './technicalRequest.model';

@Injectable({
  providedIn: 'root',
})
export class TechnicalRequestModelListRepositoryService {
  constructor(
    private technicalRequestModelListSubjectService: TechnicalRequestModelListSubjectService
  ) {}

  getTechnicalRequestModelListDomain(): TechnicalRequestListDomain {
    const array = this.technicalRequestModelListSubjectService.getValue() ?? [];
    return new TechnicalRequestListDomain(array);
  }

  save(technicalRequestModelList: TechnicalRequestModel[]) {
    this.technicalRequestModelListSubjectService.next(
      technicalRequestModelList
    );
  }
}
