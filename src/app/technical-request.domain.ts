import { TechnicalRequestModel, Article } from './technicalRequest.model';

export class TechnicalRequestDomain {
  private readonly _technicalRequest: TechnicalRequestModel;

  constructor(technicalRequest: TechnicalRequestModel) {
    this._technicalRequest = technicalRequest;
  }

  get articles(): Article[] {
    return this._technicalRequest.articles;
  }

  get technicalRequestModel(): TechnicalRequestModel {
    return this._technicalRequest;
  }

  addArticle(article: Article) {
    const foundArticle =
      this._technicalRequest?.articles &&
      this._technicalRequest?.articles.find((x) => x.name === article.name);
    if (foundArticle !== undefined) {
      console.log('Already exists article');
      return;
    }

    this._technicalRequest.articles.push(article);
  }

  editArticle(pos: number, article: Article) {
    if (article.name === 'test') {
      console.log('Cannot edit article');
    } else {
      this._technicalRequest.articles[pos].name = article.name;
      this._technicalRequest.articles[pos].quantity = article.quantity;
    }
  }

  deleteArticle() {
    if (this.articles.length === 1) {
      console.log('Cannot delete article');
      return;
    }
    const pos = this.articles.findIndex((x) => x.selected);
    this._technicalRequest.articles.splice(pos, 1);
  }

  selectArticle(pos: number) {
    if (this.articles.length === 0) {
      console.log('Cannot select article');
      return;
    }
    this._technicalRequest.articles.forEach((x) => (x.selected = false));

    this._technicalRequest.articles[pos].selected = true;
  }

  unSelectAllArticle(pos: number) {
    if (this.articles.length === 0) {
      console.log('Cannot select article');
      return;
    }
    this._technicalRequest.articles.forEach((x) => (x.selected = false));

    this._technicalRequest.articles[pos].selected = true;
  }
}
