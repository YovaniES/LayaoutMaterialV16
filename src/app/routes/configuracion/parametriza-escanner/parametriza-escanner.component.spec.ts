import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizaEscannerComponent } from './parametriza-escanner.component';

describe('ParametrizaEscannerComponent', () => {
  let component: ParametrizaEscannerComponent;
  let fixture: ComponentFixture<ParametrizaEscannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametrizaEscannerComponent],
    });
    fixture = TestBed.createComponent(ParametrizaEscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
