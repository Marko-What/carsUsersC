import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDetailsTableComponent } from './cars-details-table.component';

describe('CarsDetailsTableComponent', () => {
  let component: CarsDetailsTableComponent;
  let fixture: ComponentFixture<CarsDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
