import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexacionDeReprocesadosComponent } from './indexacion-de-reprocesados.component';

describe('IndexacionDeReprocesadosComponent', () => {
  let component: IndexacionDeReprocesadosComponent;
  let fixture: ComponentFixture<IndexacionDeReprocesadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexacionDeReprocesadosComponent],
    });
    fixture = TestBed.createComponent(IndexacionDeReprocesadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
