import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsPerson } from './star-wars-person';

describe('StarWarsPerson', () => {
  let component: StarWarsPerson;
  let fixture: ComponentFixture<StarWarsPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarWarsPerson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsPerson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
