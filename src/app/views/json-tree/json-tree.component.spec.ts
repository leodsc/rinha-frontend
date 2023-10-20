import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTreeComponent } from './json-tree.component';

describe('JsonTreeComponent', () => {
  let component: JsonTreeComponent;
  let fixture: ComponentFixture<JsonTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonTreeComponent]
    });
    fixture = TestBed.createComponent(JsonTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
