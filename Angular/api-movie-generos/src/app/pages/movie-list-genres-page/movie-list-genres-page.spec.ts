import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListGenresPage } from './movie-list-genres-page';

describe('MovieListGenresPage', () => {
  let component: MovieListGenresPage;
  let fixture: ComponentFixture<MovieListGenresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListGenresPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListGenresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
