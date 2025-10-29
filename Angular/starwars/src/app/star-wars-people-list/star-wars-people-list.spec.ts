import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsPeopleList } from './star-wars-people-list';

describe('StarWarsPeopleList', () => {
  let component: StarWarsPeopleList;
  let fixture: ComponentFixture<StarWarsPeopleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarWarsPeopleList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsPeopleList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
