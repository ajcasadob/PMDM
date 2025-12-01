import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListsPage } from './account-lists-page';

describe('AccountListsPage', () => {
  let component: AccountListsPage;
  let fixture: ComponentFixture<AccountListsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountListsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
