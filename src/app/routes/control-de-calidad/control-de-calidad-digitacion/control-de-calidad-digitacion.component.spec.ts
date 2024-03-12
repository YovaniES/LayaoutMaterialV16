import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeCalidadDigitacionComponent } from './control-de-calidad-digitacion.component';

describe('ControlDeCalidadDigitacionComponent', () => {
  let component: ControlDeCalidadDigitacionComponent;
  let fixture: ComponentFixture<ControlDeCalidadDigitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlDeCalidadDigitacionComponent],
    });
    fixture = TestBed.createComponent(ControlDeCalidadDigitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
