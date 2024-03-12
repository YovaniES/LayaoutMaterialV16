import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadDeRecepcionComponent } from './modalidad-de-recepcion.component';

describe('ModalidadDeRecepcionComponent', () => {
  let component: ModalidadDeRecepcionComponent;
  let fixture: ComponentFixture<ModalidadDeRecepcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalidadDeRecepcionComponent],
    });
    fixture = TestBed.createComponent(ModalidadDeRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
