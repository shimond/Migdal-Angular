import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusSelectorComponent } from './user-status-selector.component';

describe('UserStatusSelectorComponent', () => {
  let component: UserStatusSelectorComponent;
  let fixture: ComponentFixture<UserStatusSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatusSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
