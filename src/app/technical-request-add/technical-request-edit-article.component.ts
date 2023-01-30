import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TechnicalRequestModelRepositoryService } from '../technical-request-model-repository.service';
import { TechnicalRequestModelSubjectService } from '../technical-request-model-subject.service';

@Component({
  selector: 'technical-request-edit-article',
  templateUrl: `./technical-request-edit-article.component.html`,
  styles: [`h1 { font-family: Lato; }`],
})
export class TechnicalRequestEditArticleComponent {
  data$: Observable<any>;
  index = 0;
  name = '';
  quantity = 0;
  @Output() onCloseEditArticleForm = new EventEmitter();
  constructor(
    private technicalRequestModelSubject: TechnicalRequestModelSubjectService,
    private technicalRequestModelRepositoryService: TechnicalRequestModelRepositoryService
  ) {
    this.technicalRequestModelSubject.asObservable().subscribe((x) => {
      this.index = x.articles.findIndex((x) => x.selected);
      if (this.index == -1) return;
      this.name = x.articles[this.index].name;
      this.quantity = x.articles[this.index].quantity;
    });
  }

  onSaveArticle_Click() {
    const get =
      this.technicalRequestModelRepositoryService.getTechnicalRequestModelDomain();
    get.editArticle(this.index, { name: this.name, quantity: this.quantity });
    this.technicalRequestModelRepositoryService.save(get.technicalRequestModel);
    this.onCloseEditArticleForm.emit();
  }
}
