import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDocumentalesComponent } from './series-documentales.component';

describe('SeriesDocumentalesComponent', () => {
  let component: SeriesDocumentalesComponent;
  let fixture: ComponentFixture<SeriesDocumentalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesDocumentalesComponent],
    });
    fixture = TestBed.createComponent(SeriesDocumentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
