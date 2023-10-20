import { Component, Input, OnInit } from '@angular/core';
import { skip } from 'rxjs';
import { Tree, TreeNode } from 'src/app/classes/tree';
import { DataService, Json } from 'src/app/services/data.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input() json: Json;
  @Input() isRoot = false;
  @Input() closeCurly = true;
  tree: Tree<unknown>;
  currentMaximum = 15;
  oldKeys = [];

  constructor(private dataService: DataService, public util: UtilService) {
    this.dataService.loadNextItemsObservable.pipe(skip(1)).subscribe(() => {
      this.currentMaximum += this.currentMaximum;
    });
  }

  private maxNodesLoadedAtOnce() {
    const ELEMENTS_RENDERED_AT_ONCE = 2400;
    return Math.floor(ELEMENTS_RENDERED_AT_ONCE / this.tree.root.depth);
  }
}
