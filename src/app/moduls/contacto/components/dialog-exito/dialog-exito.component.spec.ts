import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExitoComponent } from './dialog-exito.component';

describe('DialogExitoComponent', () => {
  let component: DialogExitoComponent;
  let fixture: ComponentFixture<DialogExitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogExitoComponent]
    });
    fixture = TestBed.createComponent(DialogExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
