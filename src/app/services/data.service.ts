import { Injectable } from '@angular/core';
import small from '../../../test/json/small.json';
import { BehaviorSubject } from 'rxjs';
import { Tree, TreeNode } from '../classes/tree';

export type Json = {
  [index: string]:
    | string
    | number
    | boolean
    | Json
    | Array<string>
    | Array<number>
    | Array<Json>
    | Array<boolean>;
};

export type GenericFile<T> = {
  name: string;
  content: T;
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private loadNextItemsSubject = new BehaviorSubject<Symbol>(Symbol());
  private _json: GenericFile<Json>;
  public loadNextItemsObservable = this.loadNextItemsSubject.asObservable();

  constructor() {}

  loadNextItems() {
    this.loadNextItemsSubject.next(Symbol());
  }

  get json() {
    return this._json;
  }

  set json(value: GenericFile<Json>) {
    this._json = value;
  }
}
