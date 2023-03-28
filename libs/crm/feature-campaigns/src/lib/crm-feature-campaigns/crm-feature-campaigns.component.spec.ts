import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmFeatureCampaignsComponent } from './crm-feature-campaigns.component';

describe('CrmFeatureCampaignsComponent', () => {
  let component: CrmFeatureCampaignsComponent;
  let fixture: ComponentFixture<CrmFeatureCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmFeatureCampaignsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmFeatureCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
