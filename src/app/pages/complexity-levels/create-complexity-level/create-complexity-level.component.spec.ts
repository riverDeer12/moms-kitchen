import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComplexityLevelComponent } from './create-complexity-level.component';

describe('CreateComplexityLevelComponent', () => {
  let component: CreateComplexityLevelComponent;
  let fixture: ComponentFixture<CreateComplexityLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComplexityLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComplexityLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
