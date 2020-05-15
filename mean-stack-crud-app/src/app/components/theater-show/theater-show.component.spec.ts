import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterShowComponent } from './theater-show.component';

describe('TheaterShowComponent', () => {
  let component: TheaterShowComponent;
  let fixture: ComponentFixture<TheaterShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
