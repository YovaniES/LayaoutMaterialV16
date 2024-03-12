import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexacionComponent } from './indexacion.component';

describe('IndexacionComponent', () => {
  let component: IndexacionComponent;
  let fixture: ComponentFixture<IndexacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexacionComponent],
    });
    fixture = TestBed.createComponent(IndexacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
