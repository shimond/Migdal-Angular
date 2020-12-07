import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCounterValueComponent } from './set-counter-value.component';

describe('SetCounterValueComponent', () => {
  let component: SetCounterValueComponent;
  let fixture: ComponentFixture<SetCounterValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCounterValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCounterValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
