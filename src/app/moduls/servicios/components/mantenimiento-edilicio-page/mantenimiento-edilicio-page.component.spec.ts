import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoEdilicioPageComponent } from './mantenimiento-edilicio-page.component';

describe('MantenimientoEdilicioPageComponent', () => {
  let component: MantenimientoEdilicioPageComponent;
  let fixture: ComponentFixture<MantenimientoEdilicioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoEdilicioPageComponent]
    });
    fixture = TestBed.createComponent(MantenimientoEdilicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
