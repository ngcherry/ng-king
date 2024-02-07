import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualRingSpinnerComponent } from './dual-ring-spinner.component';

describe('DualRingSpinnerComponent', () => {
  let component: DualRingSpinnerComponent;
  let fixture: ComponentFixture<DualRingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DualRingSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DualRingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
