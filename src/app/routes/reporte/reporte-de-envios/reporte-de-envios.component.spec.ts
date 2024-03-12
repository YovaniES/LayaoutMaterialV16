import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeEnviosComponent } from './reporte-de-envios.component';

describe('ReporteDeEnviosComponent', () => {
  let component: ReporteDeEnviosComponent;
  let fixture: ComponentFixture<ReporteDeEnviosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteDeEnviosComponent],
    });
    fixture = TestBed.createComponent(ReporteDeEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
