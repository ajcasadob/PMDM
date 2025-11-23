import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMovieListPage } from './details-movie-list-page';

describe('DetailsMovieListPage', () => {
  let component: DetailsMovieListPage;
  let fixture: ComponentFixture<DetailsMovieListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMovieListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMovieListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
