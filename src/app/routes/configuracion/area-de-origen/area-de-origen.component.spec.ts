import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeOrigenComponent } from './area-de-origen.component';

describe('AreaDeOrigenComponent', () => {
  let component: AreaDeOrigenComponent;
  let fixture: ComponentFixture<AreaDeOrigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaDeOrigenComponent],
    });
    fixture = TestBed.createComponent(AreaDeOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
