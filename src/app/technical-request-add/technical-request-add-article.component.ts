import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TechnicalRequestModelRepositoryService } from '../technical-request-model-repository.service';

@Component({
  selector: 'technical-request-add-article',
  templateUrl: `./technical-request-add-article.component.html`,
  styles: [`h1 { font-family: Lato; }`],
})
export class TechnicalRequestAddArticleComponent {
  data$: Observable<any>;
  name = '';
  quantity = 0;
  @Output() onCloseAddArticleForm = new EventEmitter();
  constructor(
    private technicalRequestModelRepositoryService: TechnicalRequestModelRepositoryService
  ) {}

  onSaveArticle_Click() {
    const get =
      this.technicalRequestModelRepositoryService.getTechnicalRequestModelDomain();
    get.addArticle({ name: this.name, quantity: this.quantity });
    this.technicalRequestModelRepositoryService.save(get.technicalRequestModel);
    this.onCloseAddArticleForm.emit();
  }
}
