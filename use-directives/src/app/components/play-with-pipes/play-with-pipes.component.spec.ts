import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWithPipesComponent } from './play-with-pipes.component';

describe('PlayWithPipesComponent', () => {
  let component: PlayWithPipesComponent;
  let fixture: ComponentFixture<PlayWithPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayWithPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayWithPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
