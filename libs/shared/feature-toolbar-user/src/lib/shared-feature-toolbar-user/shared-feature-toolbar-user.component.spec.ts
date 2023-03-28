import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeatureToolbarUserComponent } from './shared-feature-toolbar-user.component';

describe('SharedFeatureToolbarUserComponent', () => {
  let component: SharedFeatureToolbarUserComponent;
  let fixture: ComponentFixture<SharedFeatureToolbarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedFeatureToolbarUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedFeatureToolbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
