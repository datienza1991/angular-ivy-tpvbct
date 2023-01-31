import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TechnicalRequestModelListRepositoryService } from '../technical-request-model-list-repository.service';
import { TechnicalRequestModelListSubjectService } from '../technical-request-model-list-subject.service';
import { TechnicalRequestModel } from '../technicalRequest.model';
import { Router } from '@angular/router';
import { GetTechnicalRequestListHttpService } from '../services/get-technical-request-list-http.service';
import { TechnicalRequestModelRepositoryService } from '../technical-request-model-repository.service';

@Component({
  selector: 'technical-request-list',
  templateUrl: './technical-request-list.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class TechnicalRequestListComponent {
  data$: Observable<TechnicalRequestModel[]>;
  constructor(
    private router: Router,
    private technicalRequestModelListRepositoryService: TechnicalRequestModelListRepositoryService,
    private technicalRequestModeRepositoryService: TechnicalRequestModelRepositoryService,
    private getTechnicalPurchaseHttpService: GetTechnicalRequestListHttpService
  ) {
    this.unSelectedAll();
    this.getData();
  }
  getData() {
    this.data$ = this.getTechnicalPurchaseHttpService.getData();
  }
  unSelectedAll() {
    var get =
      this.technicalRequestModelListRepositoryService.getTechnicalRequestModelListDomain();

    get.unSelectAll();

    this.technicalRequestModelListRepositoryService.save(
      get.technicalRequestModelList
    );
  }

  onEdit() {
    //const tr = this.subject.getValue();
    //tr.editArticle(0, { name: 'test2' });
    //this.subject.next(tr);
  }

  onSelect(i: number) {
    this.data$.subscribe((x) => {
      var selected = x[i];
      this.technicalRequestModeRepositoryService.save(selected);
      this.router.navigate(['edit']);
    });
  }
}
