import { Injectable } from '@angular/core';
import { TechnicalRequestModelListSubjectService } from './technical-request-model-list-subject.service';
import { TechnicalRequestModel, Article } from './technicalRequest.model';

export class TechnicalRequestListDomain {
  private readonly _technicalRequestModelList: TechnicalRequestModel[];

  constructor(technicalRequestList: TechnicalRequestModel[]) {
    this._technicalRequestModelList = technicalRequestList;
  }
  //TODO: check if value can retrieved even if the route changed
  get technicalRequestModelList() {
    return this._technicalRequestModelList;
  }

  addTechnicalRequestModel(technicalRequestModel: TechnicalRequestModel) {
    this._technicalRequestModelList.push(technicalRequestModel);
  }

  editTechnicalRequestModel(technicalRequestModel: TechnicalRequestModel) {
    var i = this._technicalRequestModelList.findIndex((x) => x.selected);
    if (i == -1) return;
    this._technicalRequestModelList[i].name = technicalRequestModel.name;
    this._technicalRequestModelList[i].articles =
      technicalRequestModel.articles;
  }

  select(pos: number) {
    if (this._technicalRequestModelList.length === 0) {
      console.log('Cannot select technical request');
      return;
    }
    this._technicalRequestModelList.forEach((x) => (x.selected = false));

    this._technicalRequestModelList[pos].selected = true;
  }

  unSelectAll() {
    if (this._technicalRequestModelList.length === 0) {
      console.log('Cannot un-select article');
      return;
    }
    this._technicalRequestModelList.forEach((x) => (x.selected = false));
  }
}
