import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPropertyComponent } from './json-property.component';

describe('JsonPropertyComponent', () => {
  let component: JsonPropertyComponent;
  let fixture: ComponentFixture<JsonPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonPropertyComponent]
    });
    fixture = TestBed.createComponent(JsonPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
