import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlversionComponent } from './controlversion.component';

describe('ControlversionComponent', () => {
  let component: ControlversionComponent;
  let fixture: ComponentFixture<ControlversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
