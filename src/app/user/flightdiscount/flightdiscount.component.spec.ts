import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightdiscountComponent } from './flightdiscount.component';

describe('FlightdiscountComponent', () => {
  let component: FlightdiscountComponent;
  let fixture: ComponentFixture<FlightdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightdiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
