import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxHttpComponent } from './rx-http.component';

describe('RxHttpComponent', () => {
  let component: RxHttpComponent;
  let fixture: ComponentFixture<RxHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
