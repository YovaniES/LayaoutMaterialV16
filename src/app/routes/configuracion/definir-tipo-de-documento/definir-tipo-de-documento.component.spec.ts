import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinirTipoDeDocumentoComponent } from './definir-tipo-de-documento.component';

describe('DefinirTipoDeDocumentoComponent', () => {
  let component: DefinirTipoDeDocumentoComponent;
  let fixture: ComponentFixture<DefinirTipoDeDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefinirTipoDeDocumentoComponent],
    });
    fixture = TestBed.createComponent(DefinirTipoDeDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
