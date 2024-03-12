import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveDeIndexacionComponent } from './clave-de-indexacion.component';

describe('ClaveDeIndexacionComponent', () => {
  let component: ClaveDeIndexacionComponent;
  let fixture: ComponentFixture<ClaveDeIndexacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaveDeIndexacionComponent],
    });
    fixture = TestBed.createComponent(ClaveDeIndexacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
