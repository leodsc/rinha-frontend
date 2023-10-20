import { KeyValue } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { skip } from 'rxjs';
import { DataService, Json } from 'src/app/services/data.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-json-array',
  templateUrl: './json-array.component.html',
  styleUrls: ['./json-array.component.scss'],
})
export class JsonArrayComponent implements AfterViewInit {
  @Input() key: string;
  @Input() array: Json[];
  @ViewChildren('elements', { read: ElementRef })
  private elements: QueryList<ElementRef<HTMLElement>>;
  private observer: IntersectionObserver;
  public currentMaximum = 15;
  public numberType: number;

  constructor(private dataService: DataService, public util: UtilService) {
    this.dataService.loadNextItemsObservable.pipe(skip(1)).subscribe(() => {
      this.currentMaximum += this.currentMaximum;
    });
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(this.observeLastItem);

    const element = this.elements.get(this.currentMaximum - 1);
    if (element === undefined) {
      return;
    }
    this.observer.observe(element.nativeElement);
  }

  private observeLastItem = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const elementPercentageDistance =
        entry.boundingClientRect.y - window.scrollY;
      if (elementPercentageDistance < 500) {
        this.currentMaximum += this.currentMaximum;

        if (this.currentMaximum >= this.array.length) {
          this.observer.unobserve(entry.target);
        }
      }
    });
  };
}
