import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterEditComponent } from './theater-edit.component';

describe('TheaterEditComponent', () => {
  let component: TheaterEditComponent;
  let fixture: ComponentFixture<TheaterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
