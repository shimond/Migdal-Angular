import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExComponent } from './search-ex.component';

describe('SearchExComponent', () => {
  let component: SearchExComponent;
  let fixture: ComponentFixture<SearchExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
