import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaListPage } from './provincia-list-page';

describe('ProvinciaListPage', () => {
  let component: ProvinciaListPage;
  let fixture: ComponentFixture<ProvinciaListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinciaListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinciaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
