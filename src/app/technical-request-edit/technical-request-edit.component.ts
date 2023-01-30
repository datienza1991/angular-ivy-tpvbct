import { Component, ContentChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TechnicalRequestModelListRepositoryService } from '../technical-request-model-list-repository.service';
import { TechnicalRequestModelListSubjectService } from '../technical-request-model-list-subject.service';
import { TechnicalRequestModelRepositoryService } from '../technical-request-model-repository.service';
import { TechnicalRequestModelSubjectService } from '../technical-request-model-subject.service';

@Component({
  selector: 'technical-request-edit',
  templateUrl: `./technical-request-edit.component.html`,
  styles: [`h1 { font-family: Lato; }`],
})
export class TechnicalRequestEditComponent {
  data$: Observable<any>;
  name = '';
  articles = [];
  showAddArticleForm = false;
  showEditArticleForm = false;
  @ContentChild('form') form: NgForm;
  constructor(
    private technicalRequestModelListSubject: TechnicalRequestModelListSubjectService,
    private technicalRequestModelSubject: TechnicalRequestModelSubjectService,
    private router: Router,
    private technicalRequestModelListRepositoryService: TechnicalRequestModelListRepositoryService,
    private technicalRequestModelRepositoryService: TechnicalRequestModelRepositoryService
  ) {
    this.subcribeToTechnicalRequestModelValueSubject();
    this.subscribeToSelectedTechnicalRequestModelListSubject();
  }
  subscribeToSelectedTechnicalRequestModelListSubject() {
    this.technicalRequestModelListSubject.asObservable().subscribe((x) => {
      const selected = x.find((x) => x.selected);
      if (!selected) return;
      this.technicalRequestModelRepositoryService.save(selected);
    });
  }
  subcribeToTechnicalRequestModelValueSubject() {
    const data$ = this.technicalRequestModelSubject.asObservable();
    data$.subscribe((x) => {
      if (!x) return;
      this.name = x.name;

      this.articles = x.articles;
    });
  }
  onNewArticle_Click() {
    this.showAddArticleForm = true;
  }
  onEditTechnicalRequestModel_Click() {
    const get =
      this.technicalRequestModelListRepositoryService.getTechnicalRequestModelListDomain();
    get.editTechnicalRequestModel({ name: this.name, articles: this.articles });

    this.technicalRequestModelListRepositoryService.save(
      get.technicalRequestModelList
    );
    this.name = '';
    this.router.navigate(['..']);
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
}
