import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleSpinnerComponent } from './ripple-spinner.component';

describe('RippleSpinnerComponent', () => {
  let component: RippleSpinnerComponent;
  let fixture: ComponentFixture<RippleSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippleSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RippleSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
