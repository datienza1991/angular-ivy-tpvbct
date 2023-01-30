import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { TechnicalRequestAddComponent } from './technical-request-add/technical-request-add.component';

@Injectable({
  providedIn: 'root',
})
export class FormGuardService<T> implements CanDeactivate<T> {
  canDeactivate(component: T) {
    if (component['name'] && component['name'].length > 0) {
      return confirm('Are you sure you want to leave without saving?');
    }
    return true;
  }
}
