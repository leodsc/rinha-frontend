import { Component, HostListener } from '@angular/core';
import { DataService, GenericFile, Json } from 'src/app/services/data.service';

@Component({
  selector: 'app-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss'],
})
export class JsonTreeComponent {
  constructor(private dataService: DataService) {
    this.json = this.dataService.json;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: MouseEvent) {
    const pagePercentage = window.scrollY / document.body.scrollHeight;
    if (pagePercentage > 0.9) {
      this.dataService.loadNextItems();
    }
  }

  json: GenericFile<Json>;
}
