import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionDeContrasenasComponent } from './administracion-de-contrasenas.component';

describe('AdministracionDeContrasenasComponent', () => {
  let component: AdministracionDeContrasenasComponent;
  let fixture: ComponentFixture<AdministracionDeContrasenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionDeContrasenasComponent],
    });
    fixture = TestBed.createComponent(AdministracionDeContrasenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
