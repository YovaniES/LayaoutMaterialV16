import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptacionDeImagenesComponent } from './captacion-de-imagenes.component';

describe('CaptacionDeImagenesComponent', () => {
  let component: CaptacionDeImagenesComponent;
  let fixture: ComponentFixture<CaptacionDeImagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptacionDeImagenesComponent],
    });
    fixture = TestBed.createComponent(CaptacionDeImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
