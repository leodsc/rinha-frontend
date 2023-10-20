import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayComponent } from './json-array.component';

describe('JsonArrayComponent', () => {
  let component: JsonArrayComponent;
  let fixture: ComponentFixture<JsonArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonArrayComponent]
    });
    fixture = TestBed.createComponent(JsonArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
