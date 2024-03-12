import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificacionDeFedatarioComponent } from './autentificacion-de-fedatario.component';

describe('AutentificacionDeFedatarioComponent', () => {
  let component: AutentificacionDeFedatarioComponent;
  let fixture: ComponentFixture<AutentificacionDeFedatarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutentificacionDeFedatarioComponent],
    });
    fixture = TestBed.createComponent(AutentificacionDeFedatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
