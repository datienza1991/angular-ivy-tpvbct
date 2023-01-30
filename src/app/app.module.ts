import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TechnicalRequestDomainSubjectService } from './technical-request-domain-subject.service';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalRequestAddComponent } from './technical-request-add/technical-request-add.component';
import { TechnicalRequestListComponent } from './technical-request-list/technical-request-list.component';
import { TechnicalRequestListDomainSubjectService } from './technical-request-list-domain-subject.service';
import { FormGuardService } from './form-guard.service';
import { TechnicalRequestAddArticleComponent } from './technical-request-add/technical-request-add-article.component';
import { TechnicalRequestEditArticleComponent } from './technical-request-add/technical-request-edit-article.component';
import { TechnicalRequestEditComponent } from './technical-request-edit/technical-request-edit.component';
import { GetTechnicalRequestHttpService } from './services/get-technical-request-http.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: TechnicalRequestListComponent },
  {
    path: 'add',
    component: TechnicalRequestAddComponent,
    canDeactivate: [FormGuardService],
  },
  {
    path: 'edit',
    component: TechnicalRequestEditComponent,
    canDeactivate: [FormGuardService],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    TechnicalRequestAddComponent,
    TechnicalRequestListComponent,
    TechnicalRequestAddArticleComponent,
    TechnicalRequestEditArticleComponent,
    TechnicalRequestEditComponent,
  ],
  providers: [
    TechnicalRequestDomainSubjectService,
    TechnicalRequestListDomainSubjectService,
    GetTechnicalRequestHttpService,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
