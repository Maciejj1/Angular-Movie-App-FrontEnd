import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInYearsComponent } from './movie-in-years.component';

describe('MovieInYearsComponent', () => {
  let component: MovieInYearsComponent;
  let fixture: ComponentFixture<MovieInYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInYearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieInYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
