import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureListsComponent } from './feature-lists.component';

describe('FeatureListsComponent', () => {
  let component: FeatureListsComponent;
  let fixture: ComponentFixture<FeatureListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
