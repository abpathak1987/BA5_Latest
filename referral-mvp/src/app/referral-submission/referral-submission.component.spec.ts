import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralSubmissionComponent } from './referral-submission.component';

describe('ReferralSubmissionComponent', () => {
  let component: ReferralSubmissionComponent;
  let fixture: ComponentFixture<ReferralSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
