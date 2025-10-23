import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet } from './tablet';

describe('Tablet', () => {
  let component: Tablet;
  let fixture: ComponentFixture<Tablet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
