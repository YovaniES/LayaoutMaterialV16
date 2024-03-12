import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCalidadDocumentosComponent } from './control-calidad-documentos.component';

describe('ControlCalidadDocumentosComponent', () => {
  let component: ControlCalidadDocumentosComponent;
  let fixture: ComponentFixture<ControlCalidadDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlCalidadDocumentosComponent],
    });
    fixture = TestBed.createComponent(ControlCalidadDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
