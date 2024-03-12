import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoDeDigitacionComponent } from './formato-de-digitacion.component';

describe('FormatoDeDigitacionComponent', () => {
  let component: FormatoDeDigitacionComponent;
  let fixture: ComponentFixture<FormatoDeDigitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatoDeDigitacionComponent],
    });
    fixture = TestBed.createComponent(FormatoDeDigitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
