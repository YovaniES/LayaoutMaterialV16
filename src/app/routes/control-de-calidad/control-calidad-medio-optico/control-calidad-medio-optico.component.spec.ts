import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCalidadMedioOpticoComponent } from './control-calidad-medio-optico.component';

describe('ControlCalidadMedioOpticoComponent', () => {
  let component: ControlCalidadMedioOpticoComponent;
  let fixture: ComponentFixture<ControlCalidadMedioOpticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlCalidadMedioOpticoComponent],
    });
    fixture = TestBed.createComponent(ControlCalidadMedioOpticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
