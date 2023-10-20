import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-property',
  templateUrl: './json-property.component.html',
  styleUrls: ['./json-property.component.scss'],
})
export class JsonPropertyComponent {
  @Input() key: string;
  @Input() value: string | boolean | number;
}
