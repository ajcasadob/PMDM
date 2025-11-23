import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPeopleListPage } from './details-people-list-page';

describe('DetailsPeopleListPage', () => {
  let component: DetailsPeopleListPage;
  let fixture: ComponentFixture<DetailsPeopleListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPeopleListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPeopleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
