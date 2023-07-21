import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchDetailComponent } from './movie-search-detail.component';

describe('MovieSearchDetailComponent', () => {
  let component: MovieSearchDetailComponent;
  let fixture: ComponentFixture<MovieSearchDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSearchDetailComponent]
    });
    fixture = TestBed.createComponent(MovieSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
