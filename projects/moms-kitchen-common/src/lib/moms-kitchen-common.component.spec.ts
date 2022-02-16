import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomsKitchenCommonComponent } from './moms-kitchen-common.component';

describe('MomsKitchenCommonComponent', () => {
  let component: MomsKitchenCommonComponent;
  let fixture: ComponentFixture<MomsKitchenCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomsKitchenCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomsKitchenCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
