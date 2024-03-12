import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeProduccionComponent } from './informe-produccion.component';

describe('InformeProduccionComponent', () => {
  let component: InformeProduccionComponent;
  let fixture: ComponentFixture<InformeProduccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeProduccionComponent],
    });
    fixture = TestBed.createComponent(InformeProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
