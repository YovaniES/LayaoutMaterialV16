import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionDePermisosComponent } from './asignacion-de-permisos.component';

describe('AsignacionDePermisosComponent', () => {
  let component: AsignacionDePermisosComponent;
  let fixture: ComponentFixture<AsignacionDePermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionDePermisosComponent],
    });
    fixture = TestBed.createComponent(AsignacionDePermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
