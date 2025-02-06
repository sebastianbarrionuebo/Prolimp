import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoSanitarioPageComponent } from './mantenimiento-sanitario-page.component';

describe('MantenimientoSanitarioPageComponent', () => {
  let component: MantenimientoSanitarioPageComponent;
  let fixture: ComponentFixture<MantenimientoSanitarioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoSanitarioPageComponent]
    });
    fixture = TestBed.createComponent(MantenimientoSanitarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
