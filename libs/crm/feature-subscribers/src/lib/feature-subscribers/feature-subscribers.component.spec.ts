import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSubscribersComponent } from './feature-subscribers.component';

describe('FeatureSubscribersComponent', () => {
  let component: FeatureSubscribersComponent;
  let fixture: ComponentFixture<FeatureSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSubscribersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
