import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmacionCanieriasPageComponent } from './filmacion-canierias-page.component';

describe('FilmacionCanieriasPageComponent', () => {
  let component: FilmacionCanieriasPageComponent;
  let fixture: ComponentFixture<FilmacionCanieriasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmacionCanieriasPageComponent]
    });
    fixture = TestBed.createComponent(FilmacionCanieriasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
