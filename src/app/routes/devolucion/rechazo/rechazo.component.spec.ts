import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazoComponent } from './rechazo.component';

describe('RechazoComponent', () => {
  let component: RechazoComponent;
  let fixture: ComponentFixture<RechazoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechazoComponent],
    });
    fixture = TestBed.createComponent(RechazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
