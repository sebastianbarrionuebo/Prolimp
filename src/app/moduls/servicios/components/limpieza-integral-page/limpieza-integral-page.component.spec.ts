import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaIntegralPageComponent } from './limpieza-integral-page.component';

describe('LimpiezaIntegralPageComponent', () => {
  let component: LimpiezaIntegralPageComponent;
  let fixture: ComponentFixture<LimpiezaIntegralPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimpiezaIntegralPageComponent]
    });
    fixture = TestBed.createComponent(LimpiezaIntegralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
