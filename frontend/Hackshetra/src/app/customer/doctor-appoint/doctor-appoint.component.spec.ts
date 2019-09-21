import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointComponent } from './doctor-appoint.component';

describe('DoctorAppointComponent', () => {
  let component: DoctorAppointComponent;
  let fixture: ComponentFixture<DoctorAppointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAppointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
