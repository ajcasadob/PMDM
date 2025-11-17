import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesDetailPage } from './vehicles-detail-page';

describe('VehiclesDetailPage', () => {
  let component: VehiclesDetailPage;
  let fixture: ComponentFixture<VehiclesDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
