import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMainLayoutComponent } from './ui-main-layout.component';

describe('UiMainLayoutComponent', () => {
  let component: UiMainLayoutComponent;
  let fixture: ComponentFixture<UiMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMainLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
