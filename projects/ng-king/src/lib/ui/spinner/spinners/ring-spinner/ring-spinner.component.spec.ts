import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingSpinnerComponent } from './ring-spinner.component';

describe('RingSpinnerComponent', () => {
  let component: RingSpinnerComponent;
  let fixture: ComponentFixture<RingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RingSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
