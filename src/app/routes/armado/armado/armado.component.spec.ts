import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadoComponent } from './armado.component';

describe('ArmadoComponent', () => {
  let component: ArmadoComponent;
  let fixture: ComponentFixture<ArmadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmadoComponent],
    });
    fixture = TestBed.createComponent(ArmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
