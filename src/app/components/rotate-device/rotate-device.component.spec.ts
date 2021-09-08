import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateDeviceComponent } from './rotate-device.component';

describe('RotateDeviceComponent', () => {
  let component: RotateDeviceComponent;
  let fixture: ComponentFixture<RotateDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
