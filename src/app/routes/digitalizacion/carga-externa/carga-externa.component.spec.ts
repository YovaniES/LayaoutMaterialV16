import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaExternaComponent } from './carga-externa.component';

describe('CargaExternaComponent', () => {
  let component: CargaExternaComponent;
  let fixture: ComponentFixture<CargaExternaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaExternaComponent],
    });
    fixture = TestBed.createComponent(CargaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
