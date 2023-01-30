import { Component, OnInit, VERSION } from '@angular/core';
import { TechnicalRequestListDomainSubjectService } from './technical-request-list-domain-subject.service';
import { TechnicalRequestListDomain } from './technical-request-list.domain';
import { TechnicalRequestModelListRepositoryService } from './technical-request-model-list-repository.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private technicalRequestModelListRepositoryService: TechnicalRequestModelListRepositoryService
  ) {
    const get =
      this.technicalRequestModelListRepositoryService.getTechnicalRequestModelListDomain();

    get.addTechnicalRequestModel({
      name: 'test',
      selected: false,
      articles: [{ name: 'article1', quantity: 1, selected: false }],
    });
    get.addTechnicalRequestModel({
      name: 'test2',
      selected: false,
      articles: [
        { name: 'article2', quantity: 2, selected: false },
        { name: 'article3', quantity: 3, selected: false },
      ],
    });

    this.technicalRequestModelListRepositoryService.save(
      get.technicalRequestModelList
    );
  }
}
