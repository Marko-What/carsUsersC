import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCarDetailsComponentComponent } from './single-car-details-component.component';

describe('SingleCarDetailsComponentComponent', () => {
  let component: SingleCarDetailsComponentComponent;
  let fixture: ComponentFixture<SingleCarDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCarDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCarDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
