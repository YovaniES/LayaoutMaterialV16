import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionDeMediosOpticosComponent } from './generacion-de-medios-opticos.component';

describe('GeneracionDeMediosOpticosComponent', () => {
  let component: GeneracionDeMediosOpticosComponent;
  let fixture: ComponentFixture<GeneracionDeMediosOpticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneracionDeMediosOpticosComponent],
    });
    fixture = TestBed.createComponent(GeneracionDeMediosOpticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
