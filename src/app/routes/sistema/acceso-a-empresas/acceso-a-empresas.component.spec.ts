import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesosAEmpresasComponent } from './acceso-a-empresas.component';

describe('AccesosAEmpresasComponent', () => {
  let component: AccesosAEmpresasComponent;
  let fixture: ComponentFixture<AccesosAEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesosAEmpresasComponent],
    });
    fixture = TestBed.createComponent(AccesosAEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
