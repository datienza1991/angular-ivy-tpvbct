import { Component, ContentChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddTechnicalRequestHttpService } from '../services/add-technical-request-http.service';
import { TechnicalRequestModelListRepositoryService } from '../technical-request-model-list-repository.service';
import { TechnicalRequestModelListSubjectService } from '../technical-request-model-list-subject.service';
import { TechnicalRequestModelRepositoryService } from '../technical-request-model-repository.service';
import { TechnicalRequestModelSubjectService } from '../technical-request-model-subject.service';

@Component({
  selector: 'technical-request-add',
  templateUrl: `./technical-request-add.component.html`,
  styles: [`h1 { font-family: Lato; }`],
})
export class TechnicalRequestAddComponent {
  data$: Observable<any>;
  name = '';
  articles = [];
  showAddArticleForm = false;
  showEditArticleForm = false;
  isloading = false;
  @ContentChild('form') form: NgForm;
  id: string;
  constructor(
    private technicalRequestModelSubject: TechnicalRequestModelSubjectService,
    private router: Router,
    private technicalRequestModelListRepositoryService: TechnicalRequestModelListRepositoryService,
    private technicalRequestModelRepositoryService: TechnicalRequestModelRepositoryService,
    private addTechnicalRequestHttpService: AddTechnicalRequestHttpService
  ) {
    this.setTechnicalRequestModelToEmpty();
    this.subcribeToTechnicalRequestModelValueSubject();
  }
  subcribeToTechnicalRequestModelValueSubject() {
    const data$ = this.technicalRequestModelSubject.asObservable();
    data$.subscribe((x) => {
      if (!x) return;

      if (x.name != '') {
        this.name = x.name;
      }
      this.id = x.id;
      this.articles = x.articles;
    });
  }
  setTechnicalRequestModelToEmpty() {
    this.technicalRequestModelRepositoryService.save({
      id: this.generateGUID(),
      name: '',
      articles: [],
    });
  }
  onNewArticle_Click() {
    this.showAddArticleForm = true;
  }
  onAddTechnicalRequestModel_Click() {
    const get =
      this.technicalRequestModelRepositoryService.getTechnicalRequestModelDomain();

    if (!get.setValidName(this.name)) return;

    this.isloading = true;
    this.addTechnicalRequestHttpService
      .execute(get.technicalRequestModel)
      .subscribe((x) => {
        this.name = '';
        this.router.navigate(['..']);
      });
  }
  onDelete() {
    // const tr = this.subject.getValue();
    // tr.deleteArticle();
    // this.subject.next(tr);
  }
  onCloseAddArticleForm() {
    this.showAddArticleForm = false;
  }
  onSelectArticle(pos: number) {
    const get =
      this.technicalRequestModelRepositoryService.getTechnicalRequestModelDomain();
    get.selectArticle(pos);
    this.technicalRequestModelRepositoryService.save(get.technicalRequestModel);
    this.showEditArticleForm = true;
  }
  onCloseEditArticleForm() {
    this.showEditArticleForm = false;
  }

  generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        let r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
